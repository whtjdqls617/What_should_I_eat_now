package seoul42.openproject.selectfood.advice.exception;

public class CEmailExistException  extends RuntimeException {
    public CEmailExistException(String msg, Throwable t) {
        super(msg, t);
    }

    public CEmailExistException(String msg) {
        super(msg);
    }

    public CEmailExistException() {
        super();
    }
}
