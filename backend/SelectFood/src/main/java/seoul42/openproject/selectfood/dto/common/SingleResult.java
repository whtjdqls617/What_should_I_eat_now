package seoul42.openproject.selectfood.dto.common;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SingleResult<T> extends CommonResult{
    private T data;
}
