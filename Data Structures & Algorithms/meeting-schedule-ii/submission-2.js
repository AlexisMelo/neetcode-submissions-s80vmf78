/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a, b) => a.start - b.start)
        let rooms = []

        console.log(intervals)

        for (let i = 0; i < intervals.length; i++) {
            let availableRoom = null
           
            for (const room of rooms) {
                if (room[room.length - 1].end <= intervals[i].start) {
                    availableRoom = room;
                    break;
                }
            }

            if (availableRoom) {
                availableRoom.push(intervals[i])
            } else {
                rooms.push([intervals[i]])
            }            
        }

        console.log(rooms);

        return rooms.length
    }
}
