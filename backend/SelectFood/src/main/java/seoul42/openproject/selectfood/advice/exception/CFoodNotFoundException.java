package seoul42.openproject.selectfood.advice.exception;

public class CFoodNotFoundException  extends RuntimeException {
    public CFoodNotFoundException(String msg, Throwable t) {
        super(msg, t);
    }

    public CFoodNotFoundException(String msg) {
        super(msg);
    }

    public CFoodNotFoundException() {
        super();
    }
}