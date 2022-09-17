export  const convertMinnutesToHourString = (minutesAmount : number) => {
    const hours = Math.floor(minutesAmount / 60);
    const mimutes = minutesAmount % 60

    return `${String(hours).padStart(2, '0')}:${String(mimutes).padStart(2, '0')}`
}