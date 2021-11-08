package seoul42.openproject.selectfood.dto.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@AllArgsConstructor
public class UpdateFoodListDto {

    private List<String> addFoodList;
    private List<String> deleteFoodList;
}
