package seoul42.openproject.selectfood.dto.calendar;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class CalendarMonthDto {

    List<CalendarDayFoodDto> monthFoodData;
}
