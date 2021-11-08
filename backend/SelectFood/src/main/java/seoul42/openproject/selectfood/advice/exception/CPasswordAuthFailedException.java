package seoul42.openproject.selectfood.advice.exception;

public class CPasswordAuthFailedException extends RuntimeException {
    public CPasswordAuthFailedException(String msg, Throwable t) {
        super(msg, t);
    }

    public CPasswordAuthFailedException(String msg) {
        super(msg);
    }

    public CPasswordAuthFailedException() {
        super();
    }
}