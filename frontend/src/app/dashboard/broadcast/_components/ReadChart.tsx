'use client'

import * as React from 'react'
import { Label, Pie, PieChart } from 'recharts'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'
const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'other', visitors: 190, fill: 'var(--color-other)' },
]

const chartConfig = {
    chrome: {
        label: 'Chrome',
        color: '#FFAB00',
    },

    other: {
        label: 'Other',
        color: '#F2F2F2',
    },
} satisfies ChartConfig

export function ReadChart() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])

    return (
        <div className="w-full h-full">
            <div className="pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[80px]"
                >
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={20}
                            strokeWidth={8}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        'cx' in viewBox &&
                                        'cy' in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-[9px] font-semibold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                    <tspan className="text-[9px] font-semibold">
                                                        {' '}
                                                        %
                                                    </tspan>
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </div>
        </div>
    )
}
