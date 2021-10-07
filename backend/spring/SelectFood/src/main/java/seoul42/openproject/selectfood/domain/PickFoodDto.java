package seoul42.openproject.selectfood.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class PickFoodDto {

    private String email;
    private PickFood pickFood;

}
