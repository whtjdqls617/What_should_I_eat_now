package seoul42.openproject.selectfood.dto.recommend;

import lombok.*;

import java.util.List;

@Getter @Setter @ToString
@AllArgsConstructor
@NoArgsConstructor
public class PickFoodDto {

    private List<PickFood> pickFood;

}
