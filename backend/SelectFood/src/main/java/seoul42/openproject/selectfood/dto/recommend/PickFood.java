package seoul42.openproject.selectfood.dto.recommend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@AllArgsConstructor
public class PickFood {
    private String name;
    private String youtube_url;
}
