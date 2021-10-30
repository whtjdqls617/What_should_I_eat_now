package seoul42.openproject.selectfood.dto.member;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import seoul42.openproject.selectfood.domain.DislikeFood;
import seoul42.openproject.selectfood.domain.LikeFood;
import seoul42.openproject.selectfood.domain.SelectedFood;

import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class MemberEditDto {

    private String email;
    private String nickName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
}
