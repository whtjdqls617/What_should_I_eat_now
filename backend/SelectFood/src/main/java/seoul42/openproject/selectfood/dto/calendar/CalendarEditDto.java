package seoul42.openproject.selectfood.dto.calendar;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import seoul42.openproject.selectfood.dto.member.UpdateFoodListDto;

@Getter @Setter
@AllArgsConstructor
public class CalendarEditDto {

    private String date;

    UpdateFoodListDto selectedFood;
}
