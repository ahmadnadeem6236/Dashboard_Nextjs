import type { NextApiRequest, NextApiResponse } from 'next'
import Groq from 'groq-sdk'
import { NextResponse } from 'next/server'

const groq = new Groq({ apiKey: process.env.Test })

export async function main(custom: string) {
    const chatCompletion = await getGroqChatCompletion(custom)
    // Print the completion returned by the LLM.
}

export async function getGroqChatCompletion(custom: string) {
    return groq.chat.completions.create({
        messages: [
            {
                role: 'user',
                content: `Max length 100 word, redefine in correct form: ${custom} `,
            },
        ],
        model: 'llama3-8b-8192',
    })
}

export async function POST(req: Request) {
    const { messages } = await req.json()
    const Ai = await getGroqChatCompletion(messages)
    return Response.json({ data: Ai })
}
