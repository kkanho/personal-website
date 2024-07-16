const monthDict: Record<string, string> = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
}

export const processDate = (created_at: string) => {
    // Parse the input string to a Date object
    const dt = new Date(created_at)
    
    // Extract date and time components
    const date = dt.toISOString().split('T')[0]
    const time = dt.toISOString().split('T')[1].slice(0, 8)

    const date_year = dt.toISOString().split('-')[0]
    const date_month = dt.toISOString().split('-')[1].slice(0, 2)
    const date_day = dt.toISOString().split('-')[2].slice(0, 2)
    
    const date_month_year = monthDict[date_month] + ' ' +  date_year

    return {
        date, time, date_year, date_month, date_day, date_month_year
    }
}