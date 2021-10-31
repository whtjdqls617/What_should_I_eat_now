package seoul42.openproject.selectfood.dto.member;

import lombok.Getter;
import lombok.Setter;
import seoul42.openproject.selectfood.domain.Member;

import java.util.List;

@Getter @Setter
public class MemberSignUpDto {

    private String nickName;
    private String email;
    private String password;
    List<String> likeFoodNames;
    List<String> dislikeFoodNames;
}
