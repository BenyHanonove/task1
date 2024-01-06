class Clock{
    constructor(_hour ,_minutes ,_seconds ,_country){
        this.hour = _hour;
        this.minutes = _minutes;
        this.seconds = _seconds;
        this.country = _country;
    }

    ConvertToSeconds(){
        return (this.hour * 60 * 60) + (this.minutes * 60) +this.seconds;
    }

    Show(){
        const formattedHour = this.hour.toString().padStart(2, '0');
        const formattedMinutes = this.minutes.toString().padStart(2, '0');
        const formattedSeconds = this.seconds.toString().padStart(2, '0');

        return `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;
    }
}

window.Clock = Clock;