class Flat {
    constructor(title, username, startDate, endDate,
                location, content, neededMates, price, vipstatus) {
        this.title = title;
        this.username = username;
        this.date = startDate;
        this.endDate = endDate;
        this.location = location;
        this.content = content;
        this.neededMates = neededMates;
        this.vipstatus = vipstatus;
        this.price = price;
    }
}

module.exports = Flat;
