package seoul42.openproject.selectfood.dto.member;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class MemberEditFoodDto {

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private List<String> likeFoodList;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private List<String> dislikeFoodList;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private UpdateFoodListDto likeFood;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private UpdateFoodListDto dislikeFood;
}
