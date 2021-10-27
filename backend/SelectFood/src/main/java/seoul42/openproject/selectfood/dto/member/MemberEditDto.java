package seoul42.openproject.selectfood.dto.member;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MemberEditDto {

    private String email;
    private String nickName;
    private String pickedFood;
    private String likeFood;
    private String dislikeFood;

}
