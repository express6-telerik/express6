class Flat {
    constructor(title, username, startDate, endDate,
                location, content, neededMates, status) {
        this.title = title;
        this.username = username;
        this.date = startDate;
        this.endDate = endDate;
        this.location = location;
        this.content = content;
        this.neededMates = neededMates;
        this.vipstatus = false;
        this.photos = [];
    }
}

module.exports = Flat;
