// 独立自检入口（Windows 下 moon test 可能受嵌套进程限制）。

///|
fn main {
  let total = @lib.conformance_case_count()
  let failures = @lib.run_conformance()
  if failures.length() == 0 {
    println("conformance: \{total} cases passed")
    @sys.exit(0)
    return
  }
  for failure in failures {
    println("FAIL \{failure}")
  }
  println("conformance: \{failures.length()} / \{total} failed")
  @sys.exit(1)
}
