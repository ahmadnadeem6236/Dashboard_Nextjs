'use client'
import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import OtpProgressCircles from './OtpProgressCircle'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import toast from 'react-hot-toast'

const CLIENT_ID = '17599562172020067659'

const OtpLogin = () => {
    const [userDetails, setUserDetails] = useState({
        countryCode: '',
        phoneNo: '',
        phEmailJwt: '',
    })
    const [accessToken, setAccessToken] = useState<string | null>(null)

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const token = searchParams.get('access_token')

        if (token) {
            setAccessToken(token)
            fetchUserData(token)
        }
    }, [])

    const fetchUserData = async (token: string | null) => {
        try {
            const url = 'http://localhost:3000/getuser'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_token: token,
                    client_id: CLIENT_ID,
                }),
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const responseData = await response.json()

            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Something went wrong')
            }

            const { ph_email_jwt, country_code, phone_no } = responseData

            // Validate phone number
            if (!['7783063159', '7783063149'].includes(phone_no)) {
                // Show toast notification
                toast.error('This phone number is not authorized for login.')
                throw new Error(
                    'This phone number is not authorized for login.'
                )
            }

            setUserDetails({
                countryCode: country_code,
                phoneNo: phone_no,
                phEmailJwt: ph_email_jwt,
            })

            const cookieExpire = new Date(
                Date.now() + 180 * 24 * 60 * 60 * 1000
            ).toUTCString()

            document.cookie = `ph_email_jwt=${ph_email_jwt}; expires=${cookieExpire}; path=/`
            window.location.href = '/'
        } catch (error) {
            console.error('Fetch error:', error)
        }
    }

    const AUTH_URL = `https://www.phone.email/auth/log-in?client_id=${CLIENT_ID}&redirect_url=${window.location.href}`

    const getLast4Digits = (phoneNo: string) => {
        return phoneNo.slice(-4)
    }

    return (
        <div className="flex flex-col md:flex-row w-full ">
            <div className="w-full md:w-[207px] h-[63px] md:h-full">
                <OtpProgressCircles currentStep={0} />
                {/* Keep the progress circles */}
            </div>

            <div className="flex-1 bg-blacks items-center h-full flex flex-col pt-10 ">
                {!accessToken ? (
                    <div className="text-[#024430] text-center bg-white p-4 sm:p-8 rounded-lg w-full max-w-xs sm:max-w-md">
                        <Image
                            src="https://storage.googleapis.com/prod-phoneemail-prof-images/phem-widgets/phe-signin-box.svg"
                            alt="phone email login demo"
                            width={100}
                            height={100}
                            className=" mx-auto w-72"
                        />
                        {/* <h1 className="mt-4 text-xl text-[#1D58BA] sm:text-2xl font-bold">
              Candidate<span className="text-[#FF343E]">.</span>live
            </h1>
            <p className="text-[#a6a6a6] mt-2">Welcome to Sign In with Phone</p> */}
                        <button
                            className="flex items-center justify-center font-interSemiBold text-[14px] bg-[#FF343E] text-white font-bold border-none rounded-md text-base cursor-pointer w-full sm:w-[440px] h-[48px] px-4 py-2 mt-10 relative z-20"
                            onClick={() =>
                                window.open(
                                    AUTH_URL,
                                    'peLoginWindow',
                                    'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0, width=500, height=560, top=' +
                                        (window.screen.height - 600) / 2 +
                                        ', left=' +
                                        (window.screen.width - 500) / 2
                                )
                            }
                        >
                            {/* <Image
                                width={100}
                                height={100}
                                src="https://storage.googleapis.com/prod-phoneemail-prof-images/phem-widgets/phem-phone.svg"
                                alt="phone email"
                                className=" "
                            /> */}
                            Sign In with Phone
                        </button>
                    </div>
                ) : (
                    <div className="text-[#024430] text-center bg-white p-4 sm:p-8 rounded-lg w-full max-w-xs sm:max-w-md">
                        <Image
                            width={100}
                            height={100}
                            className=""
                            src="https://storage.googleapis.com/prod-phoneemail-prof-images/phem-widgets/phe-signin-success.svg"
                            alt="phone email login success"
                        />
                        <h1 className="text-xl sm:text-2xl font-bold">
                            Welcome!
                        </h1>
                        <h4 className="text-base sm:text-lg leading-6 sm:leading-9 mt-2">
                            You are logged in successfully with <br />
                            {userDetails.countryCode}{' '}
                            {getLast4Digits(userDetails.phoneNo)}
                        </h4>
                        <button
                            className="flex items-center justify-center bg-[#FF343E] text-white font-bold border-none rounded-md text-base cursor-pointer w-full sm:w-[440px] h-[48px] px-4 py-2 mt-4 relative z-20"
                            onClick={() =>
                                (window.location.href =
                                    'http://localhost:5173/buzz')
                            }
                        >
                            Back
                        </button>
                    </div>
                )}
            </div>

            <ToastContainer />
        </div>
    )
}

export default OtpLogin
