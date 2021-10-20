package seoul42.openproject.selectfood.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import seoul42.openproject.selectfood.domain.PickFood;

import java.util.List;

@Getter @Setter @ToString
@AllArgsConstructor
public class PickFoodDto {

    private List<PickFood> pickFood;

}
