import java.beans.Transient;

public class CapstonePartnerTests extends CatscriptTestBase {

    //Remame vars/funct as needed
    @Test
    public void tokenTest(){
        assertTokensAre("1+1-12", INTEGER, PLUS, INTEGER, MINUS, INTEGER)
        assertTokensAre("{{})", LEFT_PARENTHESIS, LEFT_BRACE,RIGHT_PARENTHESIS, RIGHT_BRACE)
    }

    @Test
    public void bedmasTest() {
        assertEquals("36\n", executeProgram("(6*(4+2)"));
        assertEquals("9\n", executeProgram("(3*(3+3))/2"));
        assertEquals("-81\n", executeProgram("9*-9"));
    }

    @Test
    public void evalTest(){
        assertEquals(true, evaluateExpression("2 == 2"))
        assertEquals(false, evaluateExpression("4 > 2"))
        assertEquals(true, evaluateExpression("-4 < 2"))
        assertEquals(true, evaluateExpression("true == true"))
    }

}
