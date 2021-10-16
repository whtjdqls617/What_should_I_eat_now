package seoul42.openproject.selectfood.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import seoul42.openproject.selectfood.domain.PickFood;

import java.util.List;

@Getter @Setter
@AllArgsConstructor
public class PickFoodDto {

    private String email;
    private List<PickFood> pickFood;

}
