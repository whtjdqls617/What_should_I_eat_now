package seoul42.openproject.selectfood.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class PickFood {
    private String pickFoodName1;
    private String imgUrl1;
    private String pickFoodName2;
    private String imgUrl2;
    private String pickFoodName3;
    private String imgUrl3;
    private String pickFoodName4;
    private String imgUrl4;
}
