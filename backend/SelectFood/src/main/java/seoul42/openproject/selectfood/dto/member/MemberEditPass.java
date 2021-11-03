package seoul42.openproject.selectfood.dto.member;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MemberEditPass {

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String oldPass;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String newPass;
}
