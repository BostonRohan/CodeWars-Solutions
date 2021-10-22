class Song {
    constructor(title, artist) {
        //Constructor that contains the getters and setters, will return or set these values.
        this.title = title;
        this.artist = artist;
        this.hasListened = [];
    }
    //Mutator method
    //Takes an array of new listeners, and checks to see if they have listened to the song that day.
    //If they have not, then they are new listeners, push them onto a new arr.
    findNewListeners(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (!this.hasListened.includes(arr[i].toLowerCase())) {
                this.hasListened.push(arr[i].toLowerCase());
            }
        }
    }
    //Method that checks to see how many new listeners, listened to the song that day.
    howMany(arr) {
        //At this point, has listened includes all people who have listened to the song already.
        var numOldListeners = this.hasListened.length;
        //Now that the array has been passed through the find new listeners function, the arr now holds the value of new listeners.
        this.findNewListeners(arr);
        //Subtract the number of new listeners, by the number of old listeners to find the number of unique listeners.
        return this.hasListened.length - numOldListeners;
    }
}
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn', 'JOHN']);
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']);