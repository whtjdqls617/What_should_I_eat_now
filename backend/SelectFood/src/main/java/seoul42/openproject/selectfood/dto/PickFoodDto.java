package seoul42.openproject.selectfood.dto;

import lombok.*;
import seoul42.openproject.selectfood.domain.PickFood;

import java.util.List;

@Getter @Setter @ToString
@AllArgsConstructor
@NoArgsConstructor
public class PickFoodDto {

    private List<PickFood> pickFood;

}
