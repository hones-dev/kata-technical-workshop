package fr.codeworks.bbl

import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

internal class CodeTestRunnerTest {

    @Test
    fun shouldRunMain() {
        Assertions.assertThat(1)
            .`as`("should work!")
            .isEqualTo(1)
    }
}
