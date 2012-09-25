package models;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

public class Talk {

    public String title;
    public Date fromTime;
    public Date toTime;
    public String room;

    public Talk(Map<String, String> talkAsMap) {
        this.fromTime = parseDate(talkAsMap.get("fromTime"));
        this.toTime = parseDate(talkAsMap.get("toTime"));
        this.title = talkAsMap.get("title");
        this.room = talkAsMap.get("room");
    }

    private Date parseDate(String strDate)  {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            return dateFormat.parse(strDate);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

}
