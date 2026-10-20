function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Invoke(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Invoke.prototype.$tag = 1;
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix5Scope(param0, param1, param2, param3) {
  this.id = param0;
  this.parent = param1;
  this.sub_scopes = param2;
  this.cleanups = param3;
}
function _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita3cmd2Op(param0, param1, param2, param3, param4) {
  this.invoke = param0;
  this.settle = param1;
  this.resume_ = param2;
  this.identify = param3;
  this.debug = param4;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHost(param0) {
  this.stores = param0;
}
function _M0TP411moonbitlang5async8internal9coroutine9Scheduler(param0, param1, param2, param3) {
  this.coro_id = param0;
  this.curr_coro = param1;
  this.run_later = param2;
  this.all_coros = param3;
}
function _M0TPB9ArrayViewGRP411moonbitlang5async8internal9coroutine9CoroutineE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $oob() {
  throw new Error("Index out of bounds");
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB6Hasher(param0) {
  this.acc = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB4IterGUiiEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB4IterGRPC14diff11CountRecordE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGUiiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some.prototype.$tag = 1;
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsbE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsbE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0) {
  this.val = param0;
}
function _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGUiiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0DTPC16option6OptionGRPC14diff4PileE4None() {}
_M0DTPC16option6OptionGRPC14diff4PileE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPC14diff4PileE4None__ = new _M0DTPC16option6OptionGRPC14diff4PileE4None();
function _M0DTPC16option6OptionGRPC14diff4PileE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPC14diff4PileE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC13ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGdE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0TPC13set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPC13set3SetGiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0TPC13set5EntryGiE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0TPC13set5EntryGRP411moonbitlang5async8internal9coroutine9CoroutineE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0TPB8MutLocalGORPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdEE(param0) {
  this.val = param0;
}
function _M0TPC17hashmap7HashMapGsRPC14diff11CountRecordE(param0, param1, param2, param3) {
  this.entries = param0;
  this.capacity = param1;
  this.capacity_mask = param2;
  this.size = param3;
}
function _M0TPC17hashmap5EntryGsRPC14diff11CountRecordE(param0, param1, param2, param3) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
  this.value = param3;
}
function _M0TPC15deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(param0, param1, param2) {
  this.buf = param0;
  this.len = param1;
  this.head = param2;
}
function _M0TPB9ArrayViewGUsRPC14diff11CountRecordEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC14diff11CountRecord(param0, param1, param2, param3) {
  this.old_idx = param0;
  this.old_count = param1;
  this.new_idx = param2;
  this.new_count = param3;
}
function _M0TPC14diff11BackPointer(param0, param1) {
  this.value = param0;
  this.prev = param1;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC14diff15LevenshteinEdit6Delete(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC14diff15LevenshteinEdit6Delete.prototype.$tag = 0;
function _M0DTPC14diff15LevenshteinEdit6Insert(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC14diff15LevenshteinEdit6Insert.prototype.$tag = 1;
function _M0DTPC14diff15LevenshteinEdit5Equal(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC14diff15LevenshteinEdit5Equal.prototype.$tag = 2;
function _M0DTPC14diff15LevenshteinEdit7Replace(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC14diff15LevenshteinEdit7Replace.prototype.$tag = 3;
function _M0DTPC14diff4Edit6Delete(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC14diff4Edit6Delete.prototype.$tag = 0;
function _M0DTPC14diff4Edit6Insert(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC14diff4Edit6Insert.prototype.$tag = 1;
function _M0DTPC14diff4Edit5Equal(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC14diff4Edit5Equal.prototype.$tag = 2;
function _M0TPC14diff4HunkGsE(param0, param1, param2) {
  this.edits = param0;
  this.old = param1;
  this.new = param2;
}
function _M0TPB9ArrayViewGRPC14diff4EditE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC14diff9Partition(param0, param1, param2, param3) {
  this.lhs_midpoint = param0;
  this.rhs_midpoint = param1;
  this.lo_minimal = param2;
  this.hi_minimal = param3;
}
function _M0TPB9ArrayViewGUsbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC14diff4DiffGsE(param0, param1, param2) {
  this.old = param0;
  this.new = param1;
  this.edits = param2;
}
function _M0TP211Mr_2dHoujie14mbt_2ddiffview8WordSpan(param0, param1) {
  this.kind = param0;
  this.text = param1;
}
function _M0TP211Mr_2dHoujie14mbt_2ddiffview11DiffOptions(param0, param1, param2) {
  this.algorithm = param0;
  this.context = param1;
  this.word_level = param2;
}
function _M0TP211Mr_2dHoujie14mbt_2ddiffview3Row(param0, param1, param2, param3, param4, param5, param6) {
  this.kind = param0;
  this.old_line = param1;
  this.new_line = param2;
  this.old_spans = param3;
  this.new_spans = param4;
  this.old_no = param5;
  this.new_no = param6;
}
function _M0TP211Mr_2dHoujie14mbt_2ddiffview9DiffStats(param0, param1, param2, param3) {
  this.added = param0;
  this.removed = param1;
  this.changed = param2;
  this.unchanged = param3;
}
function _M0TP211Mr_2dHoujie14mbt_2ddiffview10DiffResult(param0, param1, param2) {
  this.rows = param0;
  this.stats = param1;
  this.patch = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita6common5Mouse(param0, param1, param2) {
  this.screen = param0;
  this.offset = param1;
  this.client = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita6common8Keyboard(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this.key_value = param0;
  this.code_value = param1;
  this.alt_pressed = param2;
  this.ctrl_pressed = param3;
  this.shift_pressed = param4;
  this.meta_pressed = param5;
  this.composing = param6;
  this.repeated = param7;
  this.location_value = param8;
}
function _M0TP319moonbit_2dcommunity7rabbita6common6Scroll(param0, param1, param2) {
  this.scroll_offset = param0;
  this.scroll_width = param1;
  this.scroll_height = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(param0) {
  this.value = param0;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(param0, param1, param2) {
  this.slots = param0;
  this.gens = param1;
  this.free = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap2Id(param0, param1) {
  this.gen = param0;
  this.idx = param1;
}
function _M0DTP411moonbitlang5async8internal9coroutine5State4Done() {}
_M0DTP411moonbitlang5async8internal9coroutine5State4Done.prototype.$tag = 0;
const _M0DTP411moonbitlang5async8internal9coroutine5State4Done__ = new _M0DTP411moonbitlang5async8internal9coroutine5State4Done();
function _M0DTP411moonbitlang5async8internal9coroutine5State4Fail(param0) {
  this._0 = param0;
}
_M0DTP411moonbitlang5async8internal9coroutine5State4Fail.prototype.$tag = 1;
function _M0DTP411moonbitlang5async8internal9coroutine5State9Cancelled() {}
_M0DTP411moonbitlang5async8internal9coroutine5State9Cancelled.prototype.$tag = 2;
const _M0DTP411moonbitlang5async8internal9coroutine5State9Cancelled__ = new _M0DTP411moonbitlang5async8internal9coroutine5State9Cancelled();
function _M0DTP411moonbitlang5async8internal9coroutine5State7Running() {}
_M0DTP411moonbitlang5async8internal9coroutine5State7Running.prototype.$tag = 3;
const _M0DTP411moonbitlang5async8internal9coroutine5State7Running__ = new _M0DTP411moonbitlang5async8internal9coroutine5State7Running();
function _M0DTP411moonbitlang5async8internal9coroutine5State7Suspend(param0) {
  this._0 = param0;
}
_M0DTP411moonbitlang5async8internal9coroutine5State7Suspend.prototype.$tag = 4;
function _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__0(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__0.prototype.$tag = 0;
function _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State11_2atry_2f93(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State11_2atry_2f93.prototype.$tag = 1;
function _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__2(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__2.prototype.$tag = 2;
function _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State29_2acancellation__handler_2f96(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State29_2acancellation__handler_2f96.prototype.$tag = 3;
function _M0TP411moonbitlang5async8internal9coroutine9Coroutine(param0, param1, param2, param3, param4, param5, param6) {
  this.coro_id = param0;
  this.state = param1;
  this.shielded = param2;
  this.cancelled = param3;
  this.ready = param4;
  this.downstream = param5;
  this.loc = param6;
}
function _M0DTPC16result6ResultGOOuRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOOuRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOOuRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOOuRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16option6OptionGOuE4None() {}
_M0DTPC16option6OptionGOuE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGOuE4None__ = new _M0DTPC16option6OptionGOuE4None();
function _M0DTPC16option6OptionGOuE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGOuE4Some.prototype.$tag = 1;
function _M0DTP411moonbitlang5async8internal9coroutine68_24moonbitlang_2fasync_2finternal_2fcoroutine_2ehandle__cancellationL5StateGuE30_2acancellation__handler_2f171(param0) {
  this._0 = param0;
}
_M0DTP411moonbitlang5async8internal9coroutine68_24moonbitlang_2fasync_2finternal_2fcoroutine_2ehandle__cancellationL5StateGuE30_2acancellation__handler_2f171.prototype.$tag = 0;
function _M0DTP411moonbitlang5async8internal9coroutine68_24moonbitlang_2fasync_2finternal_2fcoroutine_2ehandle__cancellationL5StateGuE8State__1(param0) {
  this._0 = param0;
}
_M0DTP411moonbitlang5async8internal9coroutine68_24moonbitlang_2fasync_2finternal_2fcoroutine_2ehandle__cancellationL5StateGuE8State__1.prototype.$tag = 1;
const _M0FP411moonbitlang5async8internal11event__loop12set__timeout = (duration, f) => setTimeout(f, duration);
const _M0MP311moonbitlang5async9js__async11AbortSignal7aborted = (signal) => signal.aborted;
const _M0MP311moonbitlang5async9js__async11AbortSignal9on__abort = (signal, f) => signal.addEventListener('abort', f, { once: true });
const _M0MP311moonbitlang5async9js__async11AbortSignal23remove__abort__listener = (signal, f) => signal.removeEventListener('abort', f);
const _M0MP311moonbitlang5async9js__async7JsValue12abort__error = () => {
   const err = new Error()
   err.name = 'AbortError'
   return err
 };
const _M0MP311moonbitlang5async9js__async7JsValue12new__promise = (f) => new Promise(f);
function _M0DTPC16result6ResultGOuRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE19_2adefer__try_2f133(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE19_2adefer__try_2f133.prototype.$tag = 0;
function _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE8State__1(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE8State__1.prototype.$tag = 1;
function _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE12_2atry_2f138(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE12_2atry_2f138.prototype.$tag = 2;
function _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE8State__3(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE8State__3.prototype.$tag = 3;
const _M0MP319moonbit_2dcommunity7rabbita2js5Value4null = () => null;
const _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null = (n) => Object.is(n, null);
const _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined = (n) => Object.is(n, undefined);
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fbuiltin_2eCancelled_2eCancelled() {}
_M0DTPC15error5Error52moonbitlang_2fcore_2fbuiltin_2eCancelled_2eCancelled.prototype.$tag = 4;
function _M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled() {}
_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled.prototype.$tag = 3;
const _M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__ = new _M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled();
function _M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled() {}
_M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled.prototype.$tag = 2;
const _M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled__ = new _M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled();
function _M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eFallback() {}
_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eFallback.prototype.$tag = 1;
function _M0DTPC15error5Error55moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eSkip() {}
_M0DTPC15error5Error55moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eSkip.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE2Ok.prototype.$tag = 1;
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url = (self) => { return self.location.href; };
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window16queue__microtask = (self, f) => self.queueMicrotask(f);
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame = (self,f) => self.requestAnimationFrame(f);
const _M0FP319moonbit_2dcommunity7rabbita3dom6window = () => window;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element = (x) => x instanceof SVGElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom10get__style = (self) => self.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value = (x,v) => x.nodeValue = v;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling = (x) => x.nextSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling = (x) => x.previousSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node = (x) => x.parentNode;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child = (p,c) => p.appendChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child = (p,c) => p.removeChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before = (p,value,before) => p.insertBefore(value,before);
const _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node = (x, other) => x === other;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event = (event) => {
   if (typeof MouseEvent === "undefined") {
     return null
   }
   if (event instanceof MouseEvent) {
     return event
   }
   try {
     // Web IDL operations validate the interface brand across realms.
     MouseEvent.prototype.getModifierState.call(event, "")
     return event
   } catch {
     return null
   }
 };
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x = (e) => e.clientX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y = (e) => e.clientY;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key = (e) => e.ctrlKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key = (e) => e.metaKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__x = (e) => e.offsetX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__y = (e) => e.offsetY;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__x = (e) => e.screenX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__y = (e) => e.screenY;
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event = (e) => e instanceof KeyboardEvent ? e : null;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key = (e) => e.key;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent4code = (e) => e.code;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8alt__key = (e) => e.altKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9ctrl__key = (e) => e.ctrlKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent10shift__key = (e) => e.shiftKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9meta__key = (e) => e.metaKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent13is__composing = (e) => e.isComposing;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent6repeat = (e) => e.repeat;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8location = (e) => e.location;
const _M0MP319moonbit_2dcommunity7rabbita3dom17HTMLSelectElement5value = (self) => self.value;
const _M0FP319moonbit_2dcommunity7rabbita3dom29ffi__to__html__input__element = (x) => x instanceof HTMLInputElement ? x : null;
const _M0MP319moonbit_2dcommunity7rabbita3dom16HTMLInputElement5value = (self) => self.value;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element = (x) => x instanceof HTMLElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style = (s) => s.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom12console__log = (x) => console.log(x);
const _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener = (target, type, listener) => target.addEventListener(type, listener);
const _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element = (x) => x.nodeType===1 ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__to__html__select__element = (x) => x instanceof HTMLSelectElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target = (self) => self.target;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target = (self) => self.currentTarget;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default = (self) => self.preventDefault();
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute = (self,attr,value) => self.setAttribute(attr, value);
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute = (self,attr) => self.removeAttribute(attr);
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property = (self,prop,value) => self[prop] = value;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property = (self,prop) => self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__get__scroll__top = (self) => self.scrollTop;
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__get__scroll__left = (self) => self.scrollLeft;
const _M0FP319moonbit_2dcommunity7rabbita3dom32ffi__element__get__scroll__width = (self) => self.scrollWidth;
const _M0FP319moonbit_2dcommunity7rabbita3dom33ffi__element__get__scroll__height = (self) => self.scrollHeight;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html = (self,html) => self.innerHTML = html;
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property = (self, property, value) => self.setProperty(property, value);
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property = (self, property) => self.removeProperty(property);
const _M0FP319moonbit_2dcommunity7rabbita3dom8document = () => document;
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document9base__uri = (doc) => doc.baseURI;
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element = (doc,tag) => doc.createElement(tag);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner = (doc,namespace,qualifiedName) => doc.createElementNS(namespace, qualifiedName);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node = (doc,str) => doc.createTextNode(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment = (doc,str) => doc.createComment(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment = (doc) => doc.createDocumentFragment();
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id = (doc,id) => doc.getElementById(id);
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__document__get__head = (doc) => doc.head;
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__document__get__body = (doc) => doc.body;
const _M0FP319moonbit_2dcommunity7rabbita3dom37ffi__document__get__document__element = (doc) => doc.documentElement;
function _M0TP419moonbit_2dcommunity7rabbita8internal4vdom5Props(param0, param1, param2, param3) {
  this.handlers = param0;
  this.attrs = param1;
  this.props = param2;
  this.styles = param3;
}
function _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal4vdom6IProps(param0, param1) {
  this.props = param0;
  this.slots = param1;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Text(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Frag(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode5Thunk(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode5Thunk.prototype.$tag = 3;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml.prototype.$tag = 2;
function _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None.prototype.$tag = 0;
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE3Map.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE7RawHtml(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE7RawHtml.prototype.$tag = 2;
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some.prototype.$tag = 1;
function _M0TP419moonbit_2dcommunity7rabbita8internal4vdom4VDom(param0, param1, param2) {
  this.inode = param0;
  this.target_element = param1;
  this.captured_link_listener = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita6common3Pos(param0, param1) {
  this.x = param0;
  this.y = param1;
}
const _M0FP319moonbit_2dcommunity7rabbita4html28scroll__event__as__ui__event = (event) => event;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating.prototype.$tag = 2;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String.prototype.$tag = 3;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Text(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Frag(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode5Thunk(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode5Thunk.prototype.$tag = 3;
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(param0, param1, param2) {
  this.id = param0;
  this.dirty = param1;
  this.parents = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0DTPC16option6OptionGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE4None() {}
_M0DTPC16option6OptionGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE4None__ = new _M0DTPC16option6OptionGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE4None();
function _M0DTPC16option6OptionGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP319moonbit_2dcommunity7rabbita4html4HtmlE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TPB9ArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension62moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eLegacyEffect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension62moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eLegacyEffect.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension63moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eLegacyMessage(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension63moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eLegacyMessage.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension55moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eDelay(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension55moonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eDelay.prototype.$tag = 2;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension110moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2emoonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eMessage(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension110moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2emoonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eMessage.prototype.$tag = 3;
function _M0TPB8MutLocalGRPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(param0) {
  this.val = param0;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Store(param0) {
  this.on_update = param0;
}
function _M0TPB9ArrayViewGWERP319moonbit_2dcommunity7rabbita3cmd3CmdE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.after_render_queue = param0;
  this.task_queue = param1;
  this.stores = param2;
  this.scope = param3;
  this.graph_output = param4;
  this.drain_scheduled = param5;
  this.paint_scheduled = param6;
  this.document = param7;
  this.url_request = param8;
  this.url_changed = param9;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime125_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eBrowserHost_3a_3arequest__task_2elambda_2e_2atry_2f403_2elambda_2f453L5State8State__0(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime125_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eBrowserHost_3a_3arequest__task_2elambda_2e_2atry_2f403_2elambda_2f453L5State8State__0.prototype.$tag = 0;
function _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None() {}
_M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None__ = new _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None();
function _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4Some.prototype.$tag = 1;
function _M0TP219moonbit_2dcommunity7rabbita3App(param0) {
  this.builder = param0;
}
function _M0TP311Mr_2dHoujie14mbt_2ddiffview2ui5Model(param0, param1, param2) {
  this.old_text = param0;
  this.new_text = param1;
  this.word_level = param2;
}
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg6SetOld(param0) {
  this._0 = param0;
}
_M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg6SetOld.prototype.$tag = 0;
function _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg6SetNew(param0) {
  this._0 = param0;
}
_M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg6SetNew.prototype.$tag = 1;
function _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg10ToggleWord() {}
_M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg10ToggleWord.prototype.$tag = 2;
const _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg10ToggleWord__ = new _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg10ToggleWord();
function _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg4Swap() {}
_M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg4Swap.prototype.$tag = 3;
const _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg4Swap__ = new _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg4Swap();
function _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg11LoadExample() {}
_M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg11LoadExample.prototype.$tag = 4;
const _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg11LoadExample__ = new _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg11LoadExample();
const _M0FP0176moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bMr_2dHoujie_2fmbt_2ddiffview_2fui_2fModel_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE };
const _M0FP0115moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler = { method_0: (_x, _x$2) => {
  _x.method_table.method_3(_x.self, _x$2);
}, method_1: (_x, _x$2) => {
  _x.method_table.method_4(_x.self, _x$2);
}, method_2: (_x, _x$2) => {
  _x.method_table.method_5(_x.self, _x$2);
}, method_3: (_x, _x$2) => {
  _x.method_table.method_6(_x.self, _x$2);
}, method_4: (_x) => _x.method_table.method_7(_x.self), method_5: (_x, _x$2) => _x.method_table.method_8(_x.self, _x$2), method_6: (_x, _x$2) => _x.method_table.method_9(_x.self, _x$2) };
const _M0FP0130moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fDummyHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host7cleanup, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host11get__stores, method_3: _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command, method_5: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector, method_6: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector, method_7: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context14get__base__uri, method_8: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed, method_9: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request };
const _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler = { method_0: _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context14get__base__uri, method_5: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed, method_6: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request };
const _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host7cleanup, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host11get__stores, method_3: _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command, method_5: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector, method_6: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector, method_7: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context14get__base__uri, method_8: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed, method_9: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0FP0190moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2finternal_2fvdom_2fVNode_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE };
const _M0FP0179moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bMr_2dHoujie_2fmbt_2ddiffview_2fui_2fModel_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE };
const _M0FP0120moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eContext = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context14get__base__uri, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request };
const _M0FP079moonbitlang_2fcore_2fdiff_2fRange_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IPC14diff5RangePB4Show6output, method_1: _M0IP016_24default__implPB4Show10to__stringGRPC14diff5RangeE };
const _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGiE, method_1: _M0IPC13int3IntPB4Show10to__string };
const _M0FP0178moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2fhtml_2fHtml_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP319moonbit_2dcommunity7rabbita4html4HtmlE };
function _M0FP15Error10to__string(_e) {
  switch (_e.$tag) {
    case 1: {
      return "moonbit-community/rabbita/cmd.HydrateExn.Fallback";
    }
    case 4: {
      return "moonbitlang/core/builtin.Cancelled.Cancelled";
    }
    case 2: {
      return "moonbit-community/rabbita/cmd.HydrateExn.Unhandled";
    }
    case 3: {
      return "moonbit-community/rabbita/cmd.Unhandled.Unhandled";
    }
    default: {
      return "moonbit-community/rabbita/cmd.HydrateExn.Skip";
    }
  }
}
const _M0MPB4Iter4nextN6constrS9909GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE = 0;
const _M0MPB4Iter4nextN6constrS9910GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE = 0;
const _M0MPB4Iter4nextN6constrS9909GcE = 0;
const _M0MPB4Iter4nextN6constrS9910GcE = 0;
const _M0MPB4Iter3newN6constrS9917GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE = 0;
const _M0MPB4Iter3newN6constrS9917GcE = 0;
const _M0MPB5Iter23newN6constrS9918GiiE = 0;
const _M0FP211Mr_2dHoujie14mbt_2ddiffview12split__linesN7_2abindS178 = "\n";
const _M0FP419moonbit_2dcommunity7rabbita8internal3key3key = undefined;
const _M0FP319moonbit_2dcommunity7rabbita3cmd4none = new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch([]);
const _M0FP319moonbit_2dcommunity7rabbita4html11push__styleN7_2abindS2131 = ";";
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui11span__nodesN6constrS77 = "plain";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rowsN6constrS78 = "no";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rowsN6constrS79 = "old";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rowsN6constrS80 = "no";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rowsN6constrS81 = "new";
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE();
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix12dummy__scope = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap14allocate__withGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, (id) => {
  const _bind = [];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix5Scope(id, undefined, _M0MPC13set3Set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(new _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_bind, 0, 0), undefined), []);
});
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope = _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix12dummy__scope);
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock = _M0MPC13ref3Ref3RefGdE(0);
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid = _M0MPC13ref3Ref3RefGiE(0);
const _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler = new _M0TP319moonbit_2dcommunity7rabbita3cmd2Op(_M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS108, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS101, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS98, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS103, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS105);
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime2op = _M0MP319moonbit_2dcommunity7rabbita3cmd2Op2Op();
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host = _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE({ self: new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHost(_M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE()), method_table: _M0FP0130moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fDummyHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost });
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS82 = "page";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS83 = "hero";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS84 = "editors";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS85 = "pane";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS86 = "pane-title";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS87 = "editor";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS88 = 10;
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS89 = "pane";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS90 = "pane-title";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS91 = "editor";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS92 = 10;
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS93 = "toolbar";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS94 = "stats";
const _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS95 = "diff";
const _bind = [];
const _tmp = _M0MPC15deque5Deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(new _M0TPB9ArrayViewGRP411moonbitlang5async8internal9coroutine9CoroutineE(_bind, 0, 0), undefined);
const _bind$2 = [];
const _M0FP411moonbitlang5async8internal9coroutine9scheduler = new _M0TP411moonbitlang5async8internal9coroutine9Scheduler(0, undefined, _tmp, _M0MPC13set3Set3SetGRP411moonbitlang5async8internal9coroutine9CoroutineE(new _M0TPB9ArrayViewGRP411moonbitlang5async8internal9coroutine9CoroutineE(_bind$2, 0, 0), undefined));
function _M0MPB6Logger13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, self);
}
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB6Hasher8consume4(self, input) {
  self.acc = _M0FPB13consume4__acc(self.acc, input);
}
function _M0MPB6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MPB6Hasher8consume4(self, value);
}
function _M0MPB18UninitializedArray21clamped__view_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, start, end) {
  const len = self.length;
  const lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _end < 0 ? 0 : _end > len ? len : _end;
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  return new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, lo, lo + count | 0);
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < len) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp$2 = len - 1 | 0;
    while (true) {
      const i = _tmp$2;
      if (i >= 0) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp$2 = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB18UninitializedArray23make__and__blit_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(src, allocate_len, len, src_offset, dst_offset) {
  if (allocate_len >= 0 && (len >= 0 && (src_offset >= 0 && (dst_offset >= 0 && ((src_offset + len | 0) <= src.length && (dst_offset + len | 0) <= allocate_len))))) {
    return _M0MPB18UninitializedArray23unsafe__make__and__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(src, allocate_len, src_offset, dst_offset, len);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
    return $panic();
  }
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPB6Hasher12combine__int(self, value) {
  _M0MPB6Hasher13combine__uint(self, value);
}
function _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, value) {
  _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, value) {
  _M0IP411moonbitlang5async8internal9coroutine9CoroutinePB4Hash13hash__combine(value, self);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(x, y) {
  return !_M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0MPB6Hasher14Hasher_2einner(seed) {
  return new _M0TPB6Hasher((seed >>> 0) + (374761393 >>> 0) | 0);
}
function _M0MPB6Hasher6Hasher(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FPB4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MPB6Hasher14Hasher_2einner(seed);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0MPB6Hasher8finalize(self) {
  return _M0FPB13finalize__acc(self.acc);
}
function _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self) {
  const h = _M0MPB6Hasher6Hasher(undefined);
  _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(self) {
  const h = _M0MPB6Hasher6Hasher(undefined);
  _M0MPB6Hasher7combineGRP411moonbitlang5async8internal9coroutine9CoroutineE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  let _tmp$2;
  if (lo > 0) {
    let _tmp$3;
    if (lo < len) {
      let _tmp$4;
      const _p = self.charCodeAt(lo);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(lo - 1 | 0);
        _tmp$4 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$4 = false;
      }
      _tmp$3 = _tmp$4;
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    lo = lo + 1 | 0;
  }
  let _tmp$3;
  if (hi > 0) {
    let _tmp$4;
    if (hi < len) {
      let _tmp$5;
      const _p = self.charCodeAt(hi);
      if (_p >= 56320 && _p <= 57343) {
        const _p$2 = self.charCodeAt(hi - 1 | 0);
        _tmp$5 = _p$2 >= 55296 && _p$2 <= 56319;
      } else {
        _tmp$5 = false;
      }
      _tmp$4 = _tmp$5;
    } else {
      _tmp$4 = false;
    }
    _tmp$3 = _tmp$4;
  } else {
    _tmp$3 = false;
  }
  if (_tmp$3) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0IP016_24default__implPB4Show10to__stringGRPC14diff10HunkHeaderE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC14diff10HunkHeaderPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return logger.val;
}
function _M0IP016_24default__implPB4Show10to__stringGRPC14diff5RangeE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC14diff5RangePB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return logger.val;
}
function _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$3 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE;
  } else {
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$3 = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GcE;
  } else {
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE;
  }
  return new _M0TPB4IterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPB5Iter23newGiiE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB5Iter23newN6constrS9918GiiE;
  }
  return new _M0TPB4IterGUiiEE(f, size_hint$2);
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < len) {
      const _p = self.charCodeAt(self_off + i | 0);
      const _p$2 = other.charCodeAt(other_off + i | 0);
      if (_p === _p$2) {
      } else {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0MPB13StringBuilder5reset(self) {
  self.val = "";
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    let _tmp$2;
    if (str_len === 0) {
      _tmp$2 = true;
    } else {
      const _p = self.str.charCodeAt(self.start + start | 0);
      const _p$2 = str.str.charCodeAt(str.start);
      _tmp$2 = _p === _p$2;
    }
    if (_tmp$2) {
      return _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len);
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGjE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (c1 >= 55296 && c1 <= 56319 && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGUsRPC14diff11CountRecordERPC14diff11CountRecordE(self, f) {
  return new _M0TPB4IterGRPC14diff11CountRecordE(() => {
    const _bind$3 = _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self);
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter9to__arrayGcE(self) {
  const _bind$3 = self.size_hint;
  let result;
  if (_bind$3 === undefined) {
    result = [];
  } else {
    result = [];
  }
  while (true) {
    const _bind$4 = _M0MPB4Iter4nextGcE(self);
    if (_bind$4 === -1) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      _M0MPC15array5Array4pushGcE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGUiiEE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGUiiEE(self) {
  return _M0MPC15array9ArrayView4iterGUiiEE(new _M0TPB9ArrayViewGUiiEE(self, 0, self.length));
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$3 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp$2 = 0;
    let _tmp$3 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp$2;
      const size_hint$2 = _tmp$3;
      if (_ < _bind$3) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp$2 = _ + 1 | 0;
        const _bind$4 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$3 = (size_hint$2 + (_bind$4.end - _bind$4.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$4 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$4) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$4 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$4) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
}
function _M0IPC16option6OptionPB2Eq5equalGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x.old_text === _y.old_text && _x.new_text === _y.new_text && _x.word_level === _y.word_level;
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(self, default_) {
  if (self.$tag === 0) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  }
}
function _M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self === undefined) {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  } else {
    const _Some = self;
    const _t = _Some;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  }
}
function _M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  } else {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPB8new__mapGsbE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPB3MapGsbE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsbE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsbE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsbE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsbE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsbE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsbE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsbE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsbE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$4 = self.tail;
      const _bind$5 = undefined;
      const entry = new _M0TPB5EntryGsbE(_bind$4, _bind$5, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsbE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsbE(self, idx, _curr_entry);
        const _bind$4 = self.tail;
        const _bind$5 = undefined;
        const entry = new _M0TPB5EntryGsbE(_bind$4, _bind$5, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value) {
  _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsbE(self, key, value) {
  _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsbE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsbE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsbE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsbE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return -1;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return -1;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map13remove__entryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, entry) {
  const _bind$3 = entry.prev;
  if (_bind$3 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry.next;
  }
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, idx) {
  let _tmp$2 = idx;
  while (true) {
    const cur = _tmp$2;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _bind$3 = self.entries[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, _x, cur);
          _tmp$2 = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map18remove__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, _entry);
        _M0MPB3Map11shift__backGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6removeGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  _M0MPB3Map18remove__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$3 = curr_entry.val;
        if (_bind$3 === undefined) {
          break _L;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  return _M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self);
}
function _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp$2 = self.head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      break;
    } else {
      const _Some = x;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      _tmp$2 = _next;
      continue;
    }
  }
  return arr;
}
function _M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, f) {
  const _bind$3 = self.capacity;
  const _bind$4 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$5 = self.size;
  const _bind$6 = self.capacity_mask;
  const _bind$7 = self.grow_at;
  const _bind$8 = undefined;
  const _bind$9 = self.tail;
  const other = new _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_bind$4, _bind$5, _bind$3, _bind$6, _bind$7, _bind$8, _bind$9);
  if (self.size === 0) {
    return other;
  }
  const _tmp$2 = self.entries;
  const _tmp$3 = self.tail;
  const _bind$10 = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob();
  if (_bind$10 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$10;
    const _last = _Some;
    let _tmp$4 = _last;
    let _tmp$5 = self.tail;
    let _tmp$6 = undefined;
    while (true) {
      const entry = _tmp$4;
      const idx = _tmp$5;
      const next = _tmp$6;
      const _prev = entry.prev;
      const _psl = entry.psl;
      const _hash = entry.hash;
      const _key = entry.key;
      const _value = entry.value;
      const new_value = f(_key, _value);
      const new_entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_prev, next, _psl, _hash, _key, new_value);
      const _tmp$7 = other.entries;
      if (idx >>> 0 < _tmp$7.length) {
        _tmp$7[idx] = new_entry;
      } else {
        $oob();
      }
      if (_prev !== -1) {
        const _tmp$8 = self.entries;
        const _p = _prev >>> 0 < _tmp$8.length ? _tmp$8[_prev] : $oob();
        if (_p === undefined) {
          _tmp$4 = $panic();
        } else {
          const _p$2 = _p;
          _tmp$4 = _p$2;
        }
        _tmp$5 = _prev;
        _tmp$6 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function _M0MPB4Iter6filterGUsRPC14diff11CountRecordEE(self, f) {
  return _M0MPB4Iter3newGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(() => {
    while (true) {
      const _bind$3 = _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self);
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (f(_x)) {
          return _x;
        }
        continue;
      }
    }
  }, undefined);
}
function _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  return _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self);
}
function _M0MPB5Iter24nextGiiE(self) {
  return _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$3 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher12combine__int(hasher, self);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0IPC14uint4UIntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher13combine__uint(hasher, self);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPC15array5Array11unsafe__popGiE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array11unsafe__popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGiE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGiE(self);
    return v;
  }
}
function _M0MPC15array5Array3popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(self);
    return v;
  }
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGjE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array12MutArrayView4swapGUiiEE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGUiiEE(arr, start, end) {
  const _bind$3 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$3)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGUiiEE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGjE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGUiiEE(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp$2 = len;
  let _tmp$3 = 0;
  while (true) {
    const len$2 = _tmp$2;
    const limit = _tmp$3;
    if (len$2 > 0) {
      _tmp$2 = len$2 / 2 | 0;
      _tmp$3 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB23fixed__bubble__sort__byGUiiEE(arr, cmp) {
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      let _tmp$3 = i;
      while (true) {
        const j = _tmp$3;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGUiiEE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S444GUiiEE(_env, a, b) {
  const arr = _env._2;
  const cmp = _env._1;
  const swaps = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGUiiEE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GUiiEE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GUiiEE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GUiiEE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGUiiEE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: cmp, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S448GUiiEE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGUiiEE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGUiiEE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp$2 = index;
  let _tmp$3 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$2;
    const child = _tmp$3;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGUiiEE(arr, index$2, child$2);
      _tmp$2 = child$2;
      _tmp$3 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGUiiEE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const _bind$3 = len / 2 | 0;
  let _tmp$2 = _bind$3 - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGUiiEE(arr, i, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = len - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGUiiEE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGUiiEE(_M0MPC15array12MutArrayView5sliceGUiiEE(arr, 0, i), 0, cmp);
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGUiiEE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGUiiEE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$3 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  let _tmp$4 = true;
  while (true) {
    const j = _tmp$2;
    const i = _tmp$3;
    const partitioned = _tmp$4;
    if (j < _bind$3) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGUiiEE(arr, i, j);
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$2 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGUiiEE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGUiiEE(arr, cmp) {
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$2;
    const tries = _tmp$3;
    if (i < _bind$3) {
      let sorted;
      let _tmp$4 = i;
      let _tmp$5 = true;
      while (true) {
        const j = _tmp$4;
        const sorted$2 = _tmp$5;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGUiiEE(arr, j, j - 1 | 0);
          _tmp$4 = j - 1 | 0;
          _tmp$5 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        _tmp$3 = tries$2;
        continue;
      } else {
        _tmp$2 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGUiiEE(arr, cmp, pred, limit) {
  let _tmp$2 = limit;
  let _tmp$3 = arr;
  let _tmp$4 = pred;
  let _tmp$5 = true;
  let _tmp$6 = true;
  while (true) {
    const limit$2 = _tmp$2;
    const arr$2 = _tmp$3;
    const pred$2 = _tmp$4;
    const was_partitioned = _tmp$5;
    const balanced = _tmp$6;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGUiiEE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGUiiEE(arr$2, cmp);
      return undefined;
    }
    const _bind$3 = _M0FPB24fixed__choose__pivot__byGUiiEE(arr$2, cmp);
    const _pivot_index = _bind$3._0;
    const _likely_sorted = _bind$3._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGUiiEE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$4 = _M0FPB20fixed__partition__byGUiiEE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$4._0;
    const _partitioned = _bind$4._1;
    const _p = len - _pivot | 0;
    const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p$2 = _Some;
      if (cmp(_p$2, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && cmp(_p$2, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$7 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$2 = limit$3;
        _tmp$3 = _M0MPC15array12MutArrayView5sliceGUiiEE(arr$2, i, len);
        _tmp$5 = _partitioned;
        _tmp$6 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGUiiEE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGUiiEE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGUiiEE(left, cmp, pred$2, limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = right;
      _tmp$4 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGUiiEE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = left;
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView13sort__by__keyGUiiEiE(self, map) {
  _M0FPB22fixed__quick__sort__byGUiiEE(self, (a, b) => $compare_int(map(a), map(b)), undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array13sort__by__keyGUiiEiE(self, map) {
  const _bind$3 = self.length;
  _M0MPC15array12MutArrayView13sort__by__keyGUiiEiE(new _M0TPB12MutArrayViewGUiiEE(self, 0, _bind$3), map);
}
function _M0MPC15array5Array5clearGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, 0);
}
function _M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self) {
  const len = self.length;
  const arr = new Array(len);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < len) {
      arr[i] = self[(len - i | 0) - 1 | 0];
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array7flattenGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  const _bind$3 = self.length;
  let len;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const len$2 = _tmp$3;
    if (_ < _bind$3) {
      const x = self[_];
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = len$2 + x.length | 0;
      continue;
    } else {
      len = len$2;
      break;
    }
  }
  const res = new Array(len);
  const _bind$4 = self.length;
  let _tmp$4 = 0;
  let _tmp$5 = 0;
  while (true) {
    const _ = _tmp$4;
    const i = _tmp$5;
    if (_ < _bind$4) {
      const xs = self[_];
      _M0MPC15array5Array12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(res, i, xs, 0, xs.length);
      _tmp$4 = _ + 1 | 0;
      _tmp$5 = i + xs.length | 0;
      continue;
    } else {
      break;
    }
  }
  return res;
}
function _M0MPC15array5Array4lastGRPC14diff4PileE(self) {
  if (self.length === 0) {
    return _M0DTPC16option6OptionGRPC14diff4PileE4None__;
  } else {
    const _last = self[self.length - 1 | 0];
    return new _M0DTPC16option6OptionGRPC14diff4PileE4Some(_last);
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(x) {
  return new _M0TPC13ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(x);
}
function _M0MPC13ref3Ref3RefGdE(x) {
  return new _M0TPC13ref3RefGdE(x);
}
function _M0MPC13ref3Ref3RefGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEE(_env) {
  const old = _env._1;
  const self = _env._0;
  self.val = old;
}
function _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_env) {
  const old = _env._1;
  const self = _env._0;
  self.val = old;
}
function _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(_env) {
  const old = _env._1;
  const self = _env._0;
  self.val = old;
}
function _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_env) {
  const old = _env._1;
  const self = _env._0;
  self.val = old;
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEE(self, a, f) {
  const old = self.val;
  self.val = a;
  const _env = { _0: self, _1: old };
  const _defer_result = f();
  _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEE(_env);
  return _defer_result;
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self, a, f) {
  const old = self.val;
  self.val = a;
  const _env = { _0: self, _1: old };
  const _defer_result = f();
  _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_env);
  return _defer_result;
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(self, a, f) {
  const old = self.val;
  self.val = a;
  const _env = { _0: self, _1: old };
  const _defer_result = f();
  _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(_env);
  return _defer_result;
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(self, a, f) {
  const old = self.val;
  self.val = a;
  const _env = { _0: self, _1: old };
  f();
  _M0MPC13ref3Ref7protectN8_2adeferS24GRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_env);
}
function _M0FPC13set8new__setGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPC13set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPC13set8new__setGiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$6 = undefined;
  return new _M0TPC13set3SetGiE(_bind$5, 0, capacity$2, _bind$3, _bind$4, _bind$6, -1);
}
function _M0FPC13set21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, entry) {
  const _bind$3 = self.tail;
  if (_bind$3 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPC13set3Set10set__entryGiE(self, entry, new_idx) {
  const _bind$3 = entry.next;
  if (_bind$3 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$3;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set10push__awayGiE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      _M0MPC13set3Set10set__entryGiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPC13set3Set10set__entryGiE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set20rehash__place__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set20rehash__place__entryGiE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC13set3Set10push__awayGiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPC13set3Set20rehash__place__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPC13set3Set4growGiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPC13set3Set20rehash__place__entryGiE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPC13set3Set15add__with__hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB2Eq5equal(_curr_entry.key, key)) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const _bind$3 = self.tail;
  const _bind$4 = undefined;
  const entry = new _M0TPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_bind$3, _bind$4, psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, entry);
}
function _M0MPC13set3Set15add__with__hashGiE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGiE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC13set3Set10push__awayGiE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const _bind$3 = self.tail;
  const _bind$4 = undefined;
  const entry = new _M0TPC13set5EntryGiE(_bind$3, _bind$4, psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, entry);
}
function _M0MPC13set3Set15add__with__hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _bind$3 = self.entries[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        let _tmp$4;
        if (_curr_entry.hash === hash) {
          const _p = _curr_entry.key;
          _tmp$4 = _p.coro_id === key.coro_id;
        } else {
          _tmp$4 = false;
        }
        if (_tmp$4) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const _bind$3 = self.tail;
  const _bind$4 = undefined;
  const entry = new _M0TPC13set5EntryGRP411moonbitlang5async8internal9coroutine9CoroutineE(_bind$3, _bind$4, psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx, entry);
}
function _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, key) {
  _M0MPC13set3Set15add__with__hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, key, _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(key));
}
function _M0MPC13set3Set3addGiE(self, key) {
  _M0MPC13set3Set15add__with__hashGiE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPC13set3Set3addGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, key) {
  _M0MPC13set3Set15add__with__hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, key, _M0IP016_24default__implPB4Hash4hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(key));
}
function _M0MPC13set3Set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC13set21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC13set21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC13set8new__setGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(m, e);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC13set3Set3SetGiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC13set21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC13set21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC13set8new__setGiE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPC13set3Set3addGiE(m, e);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC13set3Set3SetGRP411moonbitlang5async8internal9coroutine9CoroutineE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC13set21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC13set21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC13set8new__setGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPC13set3Set3addGRP411moonbitlang5async8internal9coroutine9CoroutineE(m, e);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC13set3Set8containsGiE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, entry) {
  const _bind$3 = entry.prev;
  if (_bind$3 === -1) {
    self.head = entry.next;
  } else {
    const _tmp$2 = self.entries;
    const _p = _bind$3 >>> 0 < _tmp$2.length ? _tmp$2[_bind$3] : $oob();
    let _tmp$3;
    if (_p === undefined) {
      _tmp$3 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$3 = _p$2;
    }
    _tmp$3.next = entry.next;
  }
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx) {
  let _tmp$2 = idx;
  while (true) {
    const cur = _tmp$2;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _bind$3 = self.entries[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, _x, cur);
          _tmp$2 = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPC13set3Set6removeGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB2Eq5equal(_entry.key, key)) {
        _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, _entry);
        _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set6removeGRP411moonbitlang5async8internal9coroutine9CoroutineE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP411moonbitlang5async8internal9coroutine9CoroutineE(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p.coro_id === key.coro_id;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, _entry);
        _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set4iterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$3 = curr_entry.val;
        if (_bind$3 === undefined) {
          break _L;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          const _key = _x.key;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return _key;
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPC17hashmap7HashMap4iterGsRPC14diff11CountRecordE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.entries.length;
  return _M0MPB4Iter3newGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(() => {
    while (true) {
      if (i.val < len) {
        const entry = self.entries[i.val];
        i.val = i.val + 1 | 0;
        if (entry === undefined) {
        } else {
          const _Some = entry;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          return { _0: _key, _1: _value };
        }
        continue;
      } else {
        return undefined;
      }
    }
  }, self.size);
}
function _M0FPC17hashmap12new__hashmapGsRPC14diff11CountRecordE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = capacity$2 - 1 | 0;
  return new _M0TPC17hashmap7HashMapGsRPC14diff11CountRecordE(_bind$3, capacity$2, _bind$4, 0);
}
function _M0MPC17hashmap7HashMap10push__awayGsRPC14diff11CountRecordE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$3 = self.entries[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      self.entries[idx$2] = entry$2;
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        self.entries[idx$2] = entry$2;
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap20rehash__place__entryGsRPC14diff11CountRecordE(self, entry) {
  const hash = entry.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      entry.psl = psl;
      self.entries[idx] = entry;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC17hashmap7HashMap10push__awayGsRPC14diff11CountRecordE(self, idx, _curr);
        entry.psl = psl;
        self.entries[idx] = entry;
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap4growGsRPC14diff11CountRecordE(self) {
  const old_entries = self.entries;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _bind$3 = old_entries.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const entry = old_entries[_];
      if (entry === undefined) {
      } else {
        const _Some = entry;
        const _entry = _Some;
        _M0MPC17hashmap7HashMap20rehash__place__entryGsRPC14diff11CountRecordE(self, _entry);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC17hashmap7HashMap15set__with__hashGsRPC14diff11CountRecordE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      if (self.size >= (self.capacity / 2 | 0)) {
        _M0MPC17hashmap7HashMap4growGsRPC14diff11CountRecordE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const entry = new _M0TPC17hashmap5EntryGsRPC14diff11CountRecordE(psl, hash, key, value);
      self.entries[idx] = entry;
      self.size = self.size + 1 | 0;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= (self.capacity / 2 | 0)) {
          _M0MPC17hashmap7HashMap4growGsRPC14diff11CountRecordE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPC17hashmap7HashMap10push__awayGsRPC14diff11CountRecordE(self, idx, _curr_entry);
        const entry = new _M0TPC17hashmap5EntryGsRPC14diff11CountRecordE(psl, hash, key, value);
        self.entries[idx] = entry;
        self.size = self.size + 1 | 0;
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap3setGsRPC14diff11CountRecordE(self, key, value) {
  _M0MPC17hashmap7HashMap15set__with__hashGsRPC14diff11CountRecordE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0FPC17hashmap21capacity__for__length(length) {
  return _M0MPC13int3Int20next__power__of__two(Math.imul(length, 2) | 0);
}
function _M0MPC17hashmap7HashMap7HashMapGsRPC14diff11CountRecordE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC17hashmap21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashmap21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashmap12new__hashmapGsRPC14diff11CountRecordE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashmap7HashMap3setGsRPC14diff11CountRecordE(m, _p$3._0, _p$3._1);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashmap7HashMap3getGsRPC14diff11CountRecordE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$3 = self.entries[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC15deque5Deque9as__viewsGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  if (self.len !== 0) {
    const _buf = self.buf;
    const _head = self.head;
    const _len = self.len;
    const cap = _buf.length;
    const head_len = cap - _head | 0;
    if (head_len >= _len) {
      const _tmp$2 = _M0MPB18UninitializedArray21clamped__view_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_buf, _head, _head + _len | 0);
      const _bind$3 = [];
      return { _0: _tmp$2, _1: new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_bind$3, 0, 0) };
    } else {
      return { _0: _M0MPB18UninitializedArray21clamped__view_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_buf, _head, cap), _1: _M0MPB18UninitializedArray21clamped__view_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_buf, 0, _len - head_len | 0) };
    }
  } else {
    const _bind$3 = [];
    const _tmp$2 = new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_bind$3, 0, 0);
    const _bind$4 = [];
    return { _0: _tmp$2, _1: new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_bind$4, 0, 0) };
  }
}
function _M0MPC15deque5Deque27unsafe__make__and__blit__toGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, allocate_len, dst_offset) {
  if (self.len !== 0) {
    const _bind$3 = _M0MPC15deque5Deque9as__viewsGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self);
    const _front = _bind$3._0;
    const _back = _bind$3._1;
    const dst = _M0MPB18UninitializedArray23make__and__blit_2einnerGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.buf, allocate_len, _front.end - _front.start | 0, _front.start, dst_offset);
    _M0MPB18UninitializedArray12unsafe__blitGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(dst, dst_offset + (_front.end - _front.start | 0) | 0, self.buf, _back.start, _back.end - _back.start | 0);
    return dst;
  } else {
    return new Array(allocate_len);
  }
}
function _M0MPC15deque5Deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(arr, capacity) {
  const len = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = len;
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _capacity > len ? _capacity : len;
  }
  const buf = new Array(capacity$2);
  const _bind$3 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      const x = arr.buf[arr.start + i | 0];
      if (i >>> 0 < buf.length) {
        buf[i] = x;
      } else {
        $oob();
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TPC15deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(buf, len, 0);
}
function _M0MPC15deque5Deque7reallocGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  const _p = self.buf;
  const old_cap = _p.length;
  const new_cap = old_cap === 0 ? 8 : Math.imul(old_cap, 2) | 0;
  const new_buf = _M0MPC15deque5Deque27unsafe__make__and__blit__toGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, new_cap, 0);
  self.head = 0;
  self.buf = new_buf;
}
function _M0MPC15deque5Deque10push__backGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, value) {
  const _tmp$2 = self.len;
  const _p = self.buf;
  if (_tmp$2 === _p.length) {
    _M0MPC15deque5Deque7reallocGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self);
  }
  const _p$2 = self.buf;
  const cap = _p$2.length;
  const write_idx = (self.head + self.len | 0) % cap | 0;
  const _tmp$3 = self.buf;
  if (write_idx >>> 0 < _tmp$3.length) {
    _tmp$3[write_idx] = value;
  } else {
    $oob();
  }
  self.len = self.len + 1 | 0;
}
function _M0MPC15deque5Deque10pop__frontGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  if (self.len > 0) {
    const _tmp$2 = self.buf;
    const _tmp$3 = self.head;
    const value = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob();
    const _p = self.buf;
    const cap = _p.length;
    self.head = (self.head + 1 | 0) % cap | 0;
    self.len = self.len - 1 | 0;
    return value;
  } else {
    return undefined;
  }
}
function _M0FPC14diff12find__uniqueGsE(old, new_) {
  const _bind$3 = [];
  const _tmp$2 = new _M0TPB9ArrayViewGUsRPC14diff11CountRecordEE(_bind$3, 0, 0);
  const _p = old.end - old.start | 0;
  const _p$2 = new_.end - new_.start | 0;
  const match_lines = _M0MPC17hashmap7HashMap7HashMapGsRPC14diff11CountRecordE(_tmp$2, _p > _p$2 ? _p : _p$2);
  const _bind$4 = old.end - old.start | 0;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _bind$4) {
      if (i < 0 || i >= (old.end - old.start | 0)) {
        $panic();
      }
      const _bind$5 = _M0MPC17hashmap7HashMap3getGsRPC14diff11CountRecordE(match_lines, old.buf[old.start + i | 0]);
      if (_bind$5 === undefined) {
        if (i < 0 || i >= (old.end - old.start | 0)) {
          $panic();
        }
        _M0MPC17hashmap7HashMap3setGsRPC14diff11CountRecordE(match_lines, old.buf[old.start + i | 0], new _M0TPC14diff11CountRecord(i, 1, -1, 0));
      } else {
        const _Some = _bind$5;
        const _count_record = _Some;
        _count_record.old_count = _count_record.old_count + 1 | 0;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = new_.end - new_.start | 0;
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < _bind$5) {
      if (i < 0 || i >= (new_.end - new_.start | 0)) {
        $panic();
      }
      const _bind$6 = _M0MPC17hashmap7HashMap3getGsRPC14diff11CountRecordE(match_lines, new_.buf[new_.start + i | 0]);
      if (_bind$6 === undefined) {
      } else {
        const _Some = _bind$6;
        const _count_record = _Some;
        _count_record.new_count = _count_record.new_count + 1 | 0;
        if (_count_record.new_idx === -1) {
          _count_record.new_idx = i;
        }
      }
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const match_lines$2 = _M0MPB4Iter3mapGUsRPC14diff11CountRecordERPC14diff11CountRecordE(_M0MPB4Iter6filterGUsRPC14diff11CountRecordEE(_M0MPC17hashmap7HashMap4iterGsRPC14diff11CountRecordE(match_lines), (p) => p._1.new_count === 1 && p._1.old_count === 1), (p) => p._1);
  const unique_match_lines = [];
  while (true) {
    const _bind$6 = _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(match_lines$2);
    if (_bind$6 === undefined) {
      break;
    } else {
      const _Some = _bind$6;
      const _record = _Some;
      _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(unique_match_lines, { _0: _record.old_idx, _1: _record.new_idx });
      continue;
    }
  }
  _M0MPC15array5Array13sort__by__keyGUiiEiE(unique_match_lines, (pair) => pair._0);
  return unique_match_lines;
}
function _M0MPC14diff11BackPointer9to__array(self) {
  const result = [];
  let self$2 = self;
  while (true) {
    const _bind$3 = self$2.prev;
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _prev = _Some;
      _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, self$2.value);
      self$2 = _prev;
      continue;
    }
  }
  _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, self$2.value);
  return _M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(result);
}
function _M0MPC14diff4Pile3top(self) {
  return _M0MPC15array5Array2atGsE(self, self.length - 1 | 0);
}
function _M0MPC14diff5Piles9is__empty(self) {
  return self.length === 0;
}
function _M0MPC14diff5Piles4last(self) {
  return _M0MPC15array5Array4lastGRPC14diff4PileE(self);
}
function _M0MPC14diff5Piles9put__back(self, singleton) {
  _M0MPC15array5Array4pushGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(self, [singleton]);
}
function _M0MPC14diff4Pile4push(self, t) {
  _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self, t);
}
function _M0MPC14diff5Piles2at(self, i) {
  return _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(self, i);
}
function _M0MPC14diff5Piles23put__by__binary__search(self, new_idx, place) {
  let lo = -1;
  let hi = self.length;
  while (true) {
    if ((lo + 1 | 0) < hi) {
      const mid = (lo + hi | 0) / 2 | 0;
      if (_M0MPC14diff4Pile3top(_M0MPC14diff5Piles2at(self, mid)).value._0 < new_idx) {
        lo = mid;
      } else {
        hi = mid;
      }
      continue;
    } else {
      break;
    }
  }
  if (lo >= 0) {
    const prev = _M0MPC14diff4Pile3top(_M0MPC14diff5Piles2at(self, lo));
    if ((lo + 1 | 0) < self.length) {
      _M0MPC14diff4Pile4push(_M0MPC14diff5Piles2at(self, lo + 1 | 0), new _M0TPC14diff11BackPointer({ _0: new_idx, _1: place }, prev));
      return;
    } else {
      _M0MPC14diff5Piles9put__back(self, new _M0TPC14diff11BackPointer({ _0: new_idx, _1: place }, prev));
      return;
    }
  } else {
    _M0MPC14diff4Pile4push(_M0MPC14diff5Piles2at(self, 0), new _M0TPC14diff11BackPointer({ _0: new_idx, _1: place }, undefined));
    return;
  }
}
function _M0FPC14diff11unique__lcsGsE(old, new_) {
  const matches = _M0FPC14diff12find__uniqueGsE(old, new_);
  const piles = [];
  const _bind$3 = matches.length;
  let _tmp$2 = 0;
  while (true) {
    const place = _tmp$2;
    if (place < _bind$3) {
      const _bind$4 = _M0MPC15array5Array2atGsE(matches, place);
      const _new_idx = _bind$4._1;
      if (_M0MPC14diff5Piles9is__empty(piles)) {
        _M0MPC14diff5Piles9put__back(piles, new _M0TPC14diff11BackPointer({ _0: _new_idx, _1: place }, undefined));
      } else {
        _M0MPC14diff5Piles23put__by__binary__search(piles, _new_idx, place);
      }
      _tmp$2 = place + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = _M0MPC14diff5Piles4last(piles);
  if (_bind$4.$tag === 1) {
    const _Some = _bind$4;
    const _head = _Some._0;
    const seq = [];
    const _it = _M0MPC15array5Array4iterGUiiEE(_M0MPC14diff11BackPointer9to__array(_M0MPC14diff4Pile3top(_head)));
    while (true) {
      const _bind$5 = _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_it);
      if (_bind$5 === undefined) {
        break;
      } else {
        const _Some$2 = _bind$5;
        const _pair = _Some$2;
        const _place = _pair._1;
        _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(seq, _M0MPC15array5Array2atGsE(matches, _place));
        continue;
      }
    }
    return new _M0TPB9ArrayViewGUiiEE(seq, 0, seq.length);
  } else {
    const _bind$5 = [];
    return new _M0TPB9ArrayViewGUiiEE(_bind$5, 0, 0);
  }
}
function _M0FPC14diff19common__prefix__lenGcE(old, new_) {
  const max = (old.end - old.start | 0) < (new_.end - new_.start | 0) ? old.end - old.start | 0 : new_.end - new_.start | 0;
  let i = 0;
  while (true) {
    let _tmp$2;
    if (i < max) {
      const _bind$3 = i;
      if (_bind$3 < 0 || _bind$3 >= (old.end - old.start | 0)) {
        $panic();
      }
      const _tmp$3 = old.buf[old.start + _bind$3 | 0];
      const _bind$4 = i;
      if (_bind$4 < 0 || _bind$4 >= (new_.end - new_.start | 0)) {
        $panic();
      }
      _tmp$2 = _tmp$3 === new_.buf[new_.start + _bind$4 | 0];
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return i;
}
function _M0FPC14diff18levenshtein__editsGcE(old, new_) {
  const prefix = _M0FPC14diff19common__prefix__lenGcE(old, new_);
  const _bind$3 = old.end - old.start | 0;
  if (prefix < 0 || prefix > _bind$3) {
    $panic();
  }
  const a = new _M0TPB9ArrayViewGcE(old.buf, prefix + old.start | 0, _bind$3 + old.start | 0);
  const _bind$4 = new_.end - new_.start | 0;
  if (prefix < 0 || prefix > _bind$4) {
    $panic();
  }
  const b = new _M0TPB9ArrayViewGcE(new_.buf, prefix + new_.start | 0, _bind$4 + new_.start | 0);
  const m = a.end - a.start | 0;
  const n = b.end - b.start | 0;
  if (BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, BigInt(m)) + 1n) * BigInt.asUintN(64, BigInt.asUintN(64, BigInt(n)) + 1n))) <= BigInt.asIntN(64, 2147483647n)) {
    const width = n + 1 | 0;
    const bp = $makebytes(Math.imul(m + 1 | 0, width) | 0, 0);
    let next_row;
    if (width <= 0) {
      next_row = [];
    } else {
      const _p = 0;
      const _p$2 = $make_array_len_and_init(width, n - _p | 0);
      let _tmp$2 = 1;
      while (true) {
        const _p$3 = _tmp$2;
        if (_p$3 < width) {
          if (_p$3 >>> 0 < _p$2.length) {
            _p$2[_p$3] = n - _p$3 | 0;
          } else {
            $oob();
          }
          _tmp$2 = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      next_row = _p$2;
    }
    let _tmp$2 = 0;
    while (true) {
      const j = _tmp$2;
      if (j < n) {
        const _tmp$3 = (Math.imul(m, width) | 0) + j | 0;
        if (_tmp$3 >>> 0 < bp.length) {
          bp[_tmp$3] = 2;
        } else {
          $oob();
        }
        _tmp$2 = j + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let row = $make_array_len_and_init(width, 0);
    let _tmp$3 = 0;
    while (true) {
      const i2 = _tmp$3;
      if (i2 < m) {
        const i = (m - 1 | 0) - i2 | 0;
        const _tmp$4 = row;
        if (n >>> 0 < _tmp$4.length) {
          _tmp$4[n] = m - i | 0;
        } else {
          $oob();
        }
        const _tmp$5 = (Math.imul(i, width) | 0) + n | 0;
        if (_tmp$5 >>> 0 < bp.length) {
          bp[_tmp$5] = 1;
        } else {
          $oob();
        }
        let _tmp$6 = 0;
        while (true) {
          const j2 = _tmp$6;
          if (j2 < n) {
            const j = (n - 1 | 0) - j2 | 0;
            const _tmp$7 = next_row;
            const _tmp$8 = j + 1 | 0;
            const _tmp$9 = _tmp$8 >>> 0 < _tmp$7.length ? _tmp$7[_tmp$8] : $oob();
            let _tmp$10;
            if (i < 0 || i >= (a.end - a.start | 0)) {
              $panic();
            }
            const _tmp$11 = a.buf[a.start + i | 0];
            if (j < 0 || j >= (b.end - b.start | 0)) {
              $panic();
            }
            if (_tmp$11 === b.buf[b.start + j | 0]) {
              _tmp$10 = 0;
            } else {
              _tmp$10 = 1;
            }
            const diag = _tmp$9 + _tmp$10 | 0;
            const _tmp$12 = next_row;
            const del = (j >>> 0 < _tmp$12.length ? _tmp$12[j] : $oob()) + 1 | 0;
            const _tmp$13 = row;
            const _tmp$14 = j + 1 | 0;
            const ins = (_tmp$14 >>> 0 < _tmp$13.length ? _tmp$13[_tmp$14] : $oob()) + 1 | 0;
            let best = diag;
            let dir = 0;
            if (del < best) {
              best = del;
              dir = 1;
            }
            if (ins < best) {
              best = ins;
              dir = 2;
            }
            const _tmp$15 = row;
            if (j >>> 0 < _tmp$15.length) {
              _tmp$15[j] = best;
            } else {
              $oob();
            }
            const _tmp$16 = (Math.imul(i, width) | 0) + j | 0;
            if (_tmp$16 >>> 0 < bp.length) {
              bp[_tmp$16] = dir;
            } else {
              $oob();
            }
            _tmp$6 = j2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const t = next_row;
        next_row = row;
        row = t;
        _tmp$3 = i2 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const edits = [];
    if (prefix > 0) {
      _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(edits, new _M0DTPC14diff15LevenshteinEdit5Equal(0, 0, prefix));
    }
    let i = 0;
    let j = 0;
    while (true) {
      if (i < m || j < n) {
        const _tmp$4 = (Math.imul(i, width) | 0) + j | 0;
        const _bind$5 = _tmp$4 >>> 0 < bp.length ? bp[_tmp$4] : $oob();
        switch (_bind$5) {
          case 0: {
            const _bind$6 = i;
            if (_bind$6 < 0 || _bind$6 >= (a.end - a.start | 0)) {
              $panic();
            }
            const _tmp$5 = a.buf[a.start + _bind$6 | 0];
            const _bind$7 = j;
            if (_bind$7 < 0 || _bind$7 >= (b.end - b.start | 0)) {
              $panic();
            }
            const eq = _tmp$5 === b.buf[b.start + _bind$7 | 0];
            const start_i = i;
            const start_j = j;
            let len = 0;
            while (true) {
              let _tmp$6;
              if (i < m) {
                let _tmp$7;
                if (j < n) {
                  let _tmp$8;
                  const _tmp$9 = (Math.imul(i, width) | 0) + j | 0;
                  const _p = _tmp$9 >>> 0 < bp.length ? bp[_tmp$9] : $oob();
                  const _p$2 = 0;
                  if (_p === _p$2) {
                    const _bind$8 = i;
                    if (_bind$8 < 0 || _bind$8 >= (a.end - a.start | 0)) {
                      $panic();
                    }
                    const _tmp$10 = a.buf[a.start + _bind$8 | 0];
                    const _bind$9 = j;
                    if (_bind$9 < 0 || _bind$9 >= (b.end - b.start | 0)) {
                      $panic();
                    }
                    _tmp$8 = _tmp$10 === b.buf[b.start + _bind$9 | 0] === eq;
                  } else {
                    _tmp$8 = false;
                  }
                  _tmp$7 = _tmp$8;
                } else {
                  _tmp$7 = false;
                }
                _tmp$6 = _tmp$7;
              } else {
                _tmp$6 = false;
              }
              if (_tmp$6) {
                i = i + 1 | 0;
                j = j + 1 | 0;
                len = len + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            if (eq) {
              _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(edits, new _M0DTPC14diff15LevenshteinEdit5Equal(prefix + start_i | 0, prefix + start_j | 0, len));
            } else {
              _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(edits, new _M0DTPC14diff15LevenshteinEdit7Replace(prefix + start_i | 0, prefix + start_j | 0, len));
            }
            break;
          }
          case 1: {
            const start_i$2 = i;
            let len$2 = 0;
            while (true) {
              let _tmp$6;
              if (i < m) {
                const _tmp$7 = (Math.imul(i, width) | 0) + j | 0;
                const _p = _tmp$7 >>> 0 < bp.length ? bp[_tmp$7] : $oob();
                const _p$2 = 1;
                _tmp$6 = _p === _p$2;
              } else {
                _tmp$6 = false;
              }
              if (_tmp$6) {
                i = i + 1 | 0;
                len$2 = len$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(edits, new _M0DTPC14diff15LevenshteinEdit6Delete(prefix + start_i$2 | 0, len$2, prefix + j | 0));
            break;
          }
          default: {
            const start_j$2 = j;
            let len$3 = 0;
            while (true) {
              let _tmp$6;
              if (j < n) {
                const _tmp$7 = (Math.imul(i, width) | 0) + j | 0;
                const _p = _tmp$7 >>> 0 < bp.length ? bp[_tmp$7] : $oob();
                const _p$2 = 2;
                _tmp$6 = _p === _p$2;
              } else {
                _tmp$6 = false;
              }
              if (_tmp$6) {
                j = j + 1 | 0;
                len$3 = len$3 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(edits, new _M0DTPC14diff15LevenshteinEdit6Insert(prefix + i | 0, prefix + start_j$2 | 0, len$3));
          }
        }
        continue;
      } else {
        break;
      }
    }
    return edits;
  } else {
    return $panic();
  }
}
function _M0IPC14diff5RangePB4Show6output(self, logger) {
  let beginning = self._0 + 1 | 0;
  const len = self._1 - self._0 | 0;
  if (len === 1) {
    _M0MPB6Logger13write__objectGiE(logger, beginning);
    return;
  } else {
    if (len === 0) {
      beginning = beginning - 1 | 0;
    }
    logger.method_table.method_4(logger.self, { self: beginning, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
    logger.method_table.method_0(logger.self, ",");
    logger.method_table.method_4(logger.self, { self: len, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
    return;
  }
}
function _M0MPC14diff4Edit10new__range(self) {
  switch (self.$tag) {
    case 1: {
      const _Insert = self;
      const _new_index = _Insert._1;
      const _new_len = _Insert._2;
      return { _0: _new_index, _1: _new_index + _new_len | 0 };
    }
    case 0: {
      const _Delete = self;
      const _new_index$2 = _Delete._2;
      return { _0: _new_index$2, _1: _new_index$2 };
    }
    default: {
      const _Equal = self;
      const _new_index$3 = _Equal._1;
      const _len = _Equal._2;
      return { _0: _new_index$3, _1: _new_index$3 + _len | 0 };
    }
  }
}
function _M0MPC14diff4Edit10old__range(self) {
  switch (self.$tag) {
    case 1: {
      const _Insert = self;
      const _old_index = _Insert._0;
      return { _0: _old_index, _1: _old_index };
    }
    case 0: {
      const _Delete = self;
      const _old_index$2 = _Delete._0;
      const _old_len = _Delete._1;
      return { _0: _old_index$2, _1: _old_index$2 + _old_len | 0 };
    }
    default: {
      const _Equal = self;
      const _old_index$3 = _Equal._0;
      const _len = _Equal._2;
      return { _0: _old_index$3, _1: _old_index$3 + _len | 0 };
    }
  }
}
function _M0MPC14diff10HunkHeader3new(edits) {
  if (0 >= (edits.end - edits.start | 0)) {
    $panic();
  }
  const _bind$3 = _M0MPC14diff4Edit10old__range(edits.buf[edits.start]);
  const _first_old_start = _bind$3._0;
  const _first_old_end = _bind$3._1;
  if (0 >= (edits.end - edits.start | 0)) {
    $panic();
  }
  const _bind$4 = _M0MPC14diff4Edit10new__range(edits.buf[edits.start]);
  const _first_new_start = _bind$4._0;
  const _first_new_end = _bind$4._1;
  let old_end = _first_old_end;
  let new_end = _first_new_end;
  let found_old_end = false;
  let found_new_end = false;
  let i = edits.end - edits.start | 0;
  while (true) {
    if (i > 0) {
      i = i - 1 | 0;
      const _bind$5 = i;
      if (_bind$5 < 0 || _bind$5 >= (edits.end - edits.start | 0)) {
        $panic();
      }
      const edit = edits.buf[edits.start + _bind$5 | 0];
      const _bind$6 = _M0MPC14diff4Edit10old__range(edit);
      const _edit_old_start = _bind$6._0;
      const _edit_old_end = _bind$6._1;
      const _bind$7 = _M0MPC14diff4Edit10new__range(edit);
      const _edit_new_start = _bind$7._0;
      const _edit_new_end = _bind$7._1;
      if (!found_old_end && _edit_old_start !== _edit_old_end) {
        old_end = _edit_old_end;
        found_old_end = true;
      }
      if (!found_new_end && _edit_new_start !== _edit_new_end) {
        new_end = _edit_new_end;
        found_new_end = true;
      }
      if (found_old_end && found_new_end) {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return { _0: { _0: _first_old_start, _1: old_end }, _1: { _0: _first_new_start, _1: new_end } };
}
function _M0IPC14diff10HunkHeaderPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, "@@ -");
  logger.method_table.method_4(logger.self, { self: self._0, method_table: _M0FP079moonbitlang_2fcore_2fdiff_2fRange_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
  logger.method_table.method_0(logger.self, " +");
  logger.method_table.method_4(logger.self, { self: self._1, method_table: _M0FP079moonbitlang_2fcore_2fdiff_2fRange_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
  logger.method_table.method_0(logger.self, " @@");
}
function _M0MPC14diff4Hunk6headerGsE(self) {
  return _M0IP016_24default__implPB4Show10to__stringGRPC14diff10HunkHeaderE(_M0MPC14diff10HunkHeader3new(self.edits));
}
function _M0MPC14diff4Edit10view__fromGsE(self, old, new_) {
  switch (self.$tag) {
    case 1: {
      const _Insert = self;
      const _new_index = _Insert._1;
      const _new_len = _Insert._2;
      const _bind$3 = _new_index + _new_len | 0;
      const _bind$4 = new_.end - new_.start | 0;
      if (_new_index < 0 || (_new_index > _bind$3 || _bind$3 > _bind$4)) {
        $panic();
      }
      return new _M0TPB9ArrayViewGsE(new_.buf, _new_index + new_.start | 0, _bind$3 + new_.start | 0);
    }
    case 0: {
      const _Delete = self;
      const _old_index = _Delete._0;
      const _old_len = _Delete._1;
      const _bind$5 = _old_index + _old_len | 0;
      const _bind$6 = old.end - old.start | 0;
      if (_old_index < 0 || (_old_index > _bind$5 || _bind$5 > _bind$6)) {
        $panic();
      }
      return new _M0TPB9ArrayViewGsE(old.buf, _old_index + old.start | 0, _bind$5 + old.start | 0);
    }
    default: {
      const _Equal = self;
      const _old_index$2 = _Equal._0;
      const _len = _Equal._2;
      const _bind$7 = _old_index$2 + _len | 0;
      const _bind$8 = old.end - old.start | 0;
      if (_old_index$2 < 0 || (_old_index$2 > _bind$7 || _bind$7 > _bind$8)) {
        $panic();
      }
      return new _M0TPB9ArrayViewGsE(old.buf, _old_index$2 + old.start | 0, _bind$7 + old.start | 0);
    }
  }
}
function _M0MPC14diff4Hunk6renderGsE(self, show) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPB13StringBuilder13write__objectGsE(buf, _M0MPC14diff4Hunk6headerGsE(self));
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "\n");
  const _bind$3 = self.edits;
  const _bind$4 = _bind$3.end - _bind$3.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const edit = _bind$3.buf[_bind$3.start + _ | 0];
      let prefix;
      let slice;
      _L: {
        switch (edit.$tag) {
          case 1: {
            prefix = "+";
            slice = _M0MPC14diff4Edit10view__fromGsE(edit, self.old, self.new);
            break _L;
          }
          case 0: {
            prefix = "-";
            slice = _M0MPC14diff4Edit10view__fromGsE(edit, self.old, self.new);
            break _L;
          }
          default: {
            prefix = " ";
            slice = _M0MPC14diff4Edit10view__fromGsE(edit, self.old, self.new);
            break _L;
          }
        }
      }
      const _bind$5 = slice.end - slice.start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$5) {
          const s = slice.buf[slice.start + _$2 | 0];
          _M0MPB13StringBuilder13write__objectGsE(buf, prefix);
          _M0MPB13StringBuilder13write__objectGsE(buf, show(s));
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\n");
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function _M0FPC14diff20group__edits_2einnerGsE(edits, context, old, new_) {
  if (context >= 0) {
    if (edits.length === 0) {
      return [];
    }
    const n = edits.length;
    let pending = [];
    const result = [];
    const _bind$3 = edits.length;
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < _bind$3) {
        const edit = edits[i];
        if (edit.$tag === 2) {
          const _Equal = edit;
          const _old_index = _Equal._0;
          const _new_index = _Equal._1;
          const _len = _Equal._2;
          let old_index;
          let new_index;
          let len;
          _L: {
            if (i === 0) {
              const offset = _len < context ? 0 : _len - context | 0;
              old_index = _old_index + offset | 0;
              new_index = _new_index + offset | 0;
              len = _len - offset | 0;
              break _L;
            } else {
              old_index = _old_index;
              new_index = _new_index;
              len = _len;
              break _L;
            }
          }
          const len$2 = i === (n - 1 | 0) ? len - (len < context ? 0 : len - context | 0) | 0 : len;
          if (len$2 > (Math.imul(context, 2) | 0)) {
            if (context > 0) {
              _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(pending, new _M0DTPC14diff4Edit5Equal(old_index, new_index, context));
            }
            const _bind$4 = pending;
            _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, new _M0TPC14diff4HunkGsE(new _M0TPB9ArrayViewGRPC14diff4EditE(_bind$4, 0, _bind$4.length), old, new_));
            const offset = len$2 < context ? 0 : len$2 - context | 0;
            pending = context > 0 ? [new _M0DTPC14diff4Edit5Equal(old_index + offset | 0, new_index + offset | 0, len$2 - offset | 0)] : [];
          } else {
            if (len$2 > 0) {
              _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(pending, new _M0DTPC14diff4Edit5Equal(old_index, new_index, len$2));
            }
          }
        } else {
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(pending, edit);
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$4 = pending;
    let _tmp$3;
    if (_bind$4.length === 0) {
      _tmp$3 = true;
    } else {
      const _bind$5 = pending;
      if (_bind$5.length === 1) {
        const _x = _bind$5[0];
        if (_x.$tag === 2) {
          _tmp$3 = true;
        } else {
          _tmp$3 = false;
        }
      } else {
        _tmp$3 = false;
      }
    }
    if (!_tmp$3) {
      const _bind$5 = pending;
      _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, new _M0TPC14diff4HunkGsE(new _M0TPB9ArrayViewGRPC14diff4EditE(_bind$5, 0, _bind$5.length), old, new_));
    }
    return result;
  } else {
    return $panic();
  }
}
function _M0MPC14diff17CompactedElements2atGsE(self, index) {
  const _bind$3 = self;
  const _source = _bind$3._0;
  const _indices = _bind$3._1;
  const _bind$4 = index >>> 0 < _indices.length ? _indices[index] : $oob();
  if (_bind$4 < 0 || _bind$4 >= (_source.end - _source.start | 0)) {
    $panic();
  }
  return _source.buf[_source.start + _bind$4 | 0];
}
function _M0FPC14diff4diagGsE(forward_search_diagonal, backward_search_diagonal, diagonal_shift, lhs, rhs, lhs_offset, lhs_limit, rhs_offset, rhs_limit, too_expensive, find_minimal) {
  const dmin = lhs_offset - rhs_limit | 0;
  const dmax = lhs_limit - rhs_offset | 0;
  const fmid = lhs_offset - rhs_offset | 0;
  const bmid = lhs_limit - rhs_limit | 0;
  const odd = (fmid - bmid & 1) !== 0;
  const _tmp$2 = diagonal_shift + fmid | 0;
  if (_tmp$2 >>> 0 < forward_search_diagonal.length) {
    forward_search_diagonal[_tmp$2] = lhs_offset;
  } else {
    $oob();
  }
  const _tmp$3 = diagonal_shift + bmid | 0;
  if (_tmp$3 >>> 0 < backward_search_diagonal.length) {
    backward_search_diagonal[_tmp$3] = lhs_limit;
  } else {
    $oob();
  }
  let _tmp$4 = 1;
  let _tmp$5 = fmid;
  let _tmp$6 = fmid;
  let _tmp$7 = bmid;
  let _tmp$8 = bmid;
  while (true) {
    const c = _tmp$4;
    const fmin = _tmp$5;
    const fmax = _tmp$6;
    const bmin = _tmp$7;
    const bmax = _tmp$8;
    let fmin$2;
    if (fmin > dmin) {
      const _tmp$9 = (diagonal_shift + fmin | 0) - 2 | 0;
      if (_tmp$9 >>> 0 < forward_search_diagonal.length) {
        forward_search_diagonal[_tmp$9] = -1;
      } else {
        $oob();
      }
      fmin$2 = fmin - 1 | 0;
    } else {
      fmin$2 = fmin + 1 | 0;
    }
    let fmax$2;
    if (fmax < dmax) {
      const _tmp$9 = (diagonal_shift + fmax | 0) + 2 | 0;
      if (_tmp$9 >>> 0 < forward_search_diagonal.length) {
        forward_search_diagonal[_tmp$9] = -1;
      } else {
        $oob();
      }
      fmax$2 = fmax + 1 | 0;
    } else {
      fmax$2 = fmax - 1 | 0;
    }
    let forward_result = undefined;
    let d = fmax$2;
    while (true) {
      if (d >= fmin$2) {
        const _tmp$9 = (diagonal_shift + d | 0) - 1 | 0;
        const tlo = _tmp$9 >>> 0 < forward_search_diagonal.length ? forward_search_diagonal[_tmp$9] : $oob();
        const _tmp$10 = (diagonal_shift + d | 0) + 1 | 0;
        const thi = _tmp$10 >>> 0 < forward_search_diagonal.length ? forward_search_diagonal[_tmp$10] : $oob();
        const x = tlo >= thi ? tlo + 1 | 0 : thi;
        let x_cur;
        let y_cur;
        _L: {
          let _tmp$11 = x;
          let _tmp$12 = x - d | 0;
          while (true) {
            const x_cur$2 = _tmp$11;
            const y_cur$2 = _tmp$12;
            if (x_cur$2 < lhs_limit && (y_cur$2 < rhs_limit && _M0MPC14diff17CompactedElements2atGsE(lhs, x_cur$2) === _M0MPC14diff17CompactedElements2atGsE(rhs, y_cur$2))) {
              _tmp$11 = x_cur$2 + 1 | 0;
              _tmp$12 = y_cur$2 + 1 | 0;
              continue;
            } else {
              x_cur = x_cur$2;
              y_cur = y_cur$2;
              break _L;
            }
          }
        }
        const _tmp$11 = diagonal_shift + d | 0;
        if (_tmp$11 >>> 0 < forward_search_diagonal.length) {
          forward_search_diagonal[_tmp$11] = x_cur;
        } else {
          $oob();
        }
        let _tmp$12;
        if (odd) {
          let _tmp$13;
          if (bmin <= d) {
            let _tmp$14;
            if (d <= bmax) {
              const _tmp$15 = diagonal_shift + d | 0;
              const _tmp$16 = _tmp$15 >>> 0 < backward_search_diagonal.length ? backward_search_diagonal[_tmp$15] : $oob();
              const _tmp$17 = diagonal_shift + d | 0;
              _tmp$14 = _tmp$16 <= (_tmp$17 >>> 0 < forward_search_diagonal.length ? forward_search_diagonal[_tmp$17] : $oob());
            } else {
              _tmp$14 = false;
            }
            _tmp$13 = _tmp$14;
          } else {
            _tmp$13 = false;
          }
          _tmp$12 = _tmp$13;
        } else {
          _tmp$12 = false;
        }
        if (_tmp$12) {
          forward_result = new _M0TPC14diff9Partition(x_cur, y_cur, true, true);
          break;
        }
        d = d - 2 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$3 = forward_result;
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _result = _Some;
      return _result;
    }
    let bmin$2;
    if (bmin > dmin) {
      const _tmp$9 = (diagonal_shift + bmin | 0) - 2 | 0;
      if (_tmp$9 >>> 0 < backward_search_diagonal.length) {
        backward_search_diagonal[_tmp$9] = 2147483647;
      } else {
        $oob();
      }
      bmin$2 = bmin - 1 | 0;
    } else {
      bmin$2 = bmin + 1 | 0;
    }
    let bmax$2;
    if (bmax < dmax) {
      const _tmp$9 = (diagonal_shift + bmax | 0) + 2 | 0;
      if (_tmp$9 >>> 0 < backward_search_diagonal.length) {
        backward_search_diagonal[_tmp$9] = 2147483647;
      } else {
        $oob();
      }
      bmax$2 = bmax + 1 | 0;
    } else {
      bmax$2 = bmax - 1 | 0;
    }
    let backward_result = undefined;
    let d$2 = bmax$2;
    while (true) {
      if (d$2 >= bmin$2) {
        const _tmp$9 = (diagonal_shift + d$2 | 0) - 1 | 0;
        const tlo = _tmp$9 >>> 0 < backward_search_diagonal.length ? backward_search_diagonal[_tmp$9] : $oob();
        const _tmp$10 = (diagonal_shift + d$2 | 0) + 1 | 0;
        const thi = _tmp$10 >>> 0 < backward_search_diagonal.length ? backward_search_diagonal[_tmp$10] : $oob();
        const x = tlo < thi ? tlo : thi - 1 | 0;
        let x_cur;
        let y_cur;
        _L: {
          let _tmp$11 = x;
          let _tmp$12 = x - d$2 | 0;
          while (true) {
            const x_cur$2 = _tmp$11;
            const y_cur$2 = _tmp$12;
            if (x_cur$2 > lhs_offset && (y_cur$2 > rhs_offset && _M0MPC14diff17CompactedElements2atGsE(lhs, x_cur$2 - 1 | 0) === _M0MPC14diff17CompactedElements2atGsE(rhs, y_cur$2 - 1 | 0))) {
              _tmp$11 = x_cur$2 - 1 | 0;
              _tmp$12 = y_cur$2 - 1 | 0;
              continue;
            } else {
              x_cur = x_cur$2;
              y_cur = y_cur$2;
              break _L;
            }
          }
        }
        const _tmp$11 = diagonal_shift + d$2 | 0;
        if (_tmp$11 >>> 0 < backward_search_diagonal.length) {
          backward_search_diagonal[_tmp$11] = x_cur;
        } else {
          $oob();
        }
        let _tmp$12;
        if (!odd) {
          let _tmp$13;
          if (fmin$2 <= d$2) {
            let _tmp$14;
            if (d$2 <= fmax$2) {
              const _tmp$15 = diagonal_shift + d$2 | 0;
              const _tmp$16 = _tmp$15 >>> 0 < backward_search_diagonal.length ? backward_search_diagonal[_tmp$15] : $oob();
              const _tmp$17 = diagonal_shift + d$2 | 0;
              _tmp$14 = _tmp$16 <= (_tmp$17 >>> 0 < forward_search_diagonal.length ? forward_search_diagonal[_tmp$17] : $oob());
            } else {
              _tmp$14 = false;
            }
            _tmp$13 = _tmp$14;
          } else {
            _tmp$13 = false;
          }
          _tmp$12 = _tmp$13;
        } else {
          _tmp$12 = false;
        }
        if (_tmp$12) {
          backward_result = new _M0TPC14diff9Partition(x_cur, y_cur, true, true);
          break;
        }
        d$2 = d$2 - 2 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$4 = backward_result;
    if (_bind$4 === undefined) {
    } else {
      const _Some = _bind$4;
      const _result = _Some;
      return _result;
    }
    if (!find_minimal && c >= too_expensive) {
      let fxybest = -1;
      let fxbest = fmax$2;
      let d$3 = fmax$2;
      while (true) {
        if (d$3 >= fmin$2) {
          const _tmp$9 = diagonal_shift + d$3 | 0;
          const _p = _tmp$9 >>> 0 < forward_search_diagonal.length ? forward_search_diagonal[_tmp$9] : $oob();
          const x = lhs_limit < _p ? lhs_limit : _p;
          const y = x - d$3 | 0;
          let x$2;
          let y$2;
          _L: {
            if (rhs_limit < y) {
              x$2 = rhs_limit + d$3 | 0;
              y$2 = rhs_limit;
              break _L;
            } else {
              x$2 = x;
              y$2 = y;
              break _L;
            }
          }
          if (fxybest < (x$2 + y$2 | 0)) {
            fxybest = x$2 + y$2 | 0;
            fxbest = x$2;
          }
          d$3 = d$3 - 2 | 0;
          continue;
        } else {
          break;
        }
      }
      let bxybest = 2147483647;
      let bxbest = bmax$2;
      let d$4 = bmax$2;
      while (true) {
        if (d$4 >= bmin$2) {
          const _tmp$9 = diagonal_shift + d$4 | 0;
          const _p = _tmp$9 >>> 0 < backward_search_diagonal.length ? backward_search_diagonal[_tmp$9] : $oob();
          const x = lhs_offset > _p ? lhs_offset : _p;
          const y = x - d$4 | 0;
          let x$2;
          let y$2;
          _L: {
            if (y < rhs_offset) {
              x$2 = rhs_offset + d$4 | 0;
              y$2 = rhs_offset;
              break _L;
            } else {
              x$2 = x;
              y$2 = y;
              break _L;
            }
          }
          if ((x$2 + y$2 | 0) < bxybest) {
            bxybest = x$2 + y$2 | 0;
            bxbest = x$2;
          }
          d$4 = d$4 - 2 | 0;
          continue;
        } else {
          break;
        }
      }
      if (((lhs_limit + rhs_limit | 0) - bxybest | 0) < (fxybest - (lhs_offset + rhs_offset | 0) | 0)) {
        return new _M0TPC14diff9Partition(fxbest, fxybest - fxbest | 0, true, false);
      } else {
        return new _M0TPC14diff9Partition(bxbest, bxybest - bxbest | 0, false, true);
      }
    } else {
      _tmp$4 = c + 1 | 0;
      _tmp$5 = fmin$2;
      _tmp$6 = fmax$2;
      _tmp$7 = bmin$2;
      _tmp$8 = bmax$2;
      continue;
    }
  }
}
function _M0FPC14diff10diff__loopN15loop__recursiveS103GsE(_env, lhs_offset, lhs_limit, rhs_offset, rhs_limit, find_minimal) {
  const lhs_change_markers = _env._7;
  const rhs_change_markers = _env._6;
  const lhs = _env._5;
  const forward_search_diagonal = _env._4;
  const rhs = _env._3;
  const too_expensive = _env._2;
  const diagonal_shift = _env._1;
  const backward_search_diagonal = _env._0;
  let _tmp$2 = lhs_offset;
  let _tmp$3 = lhs_limit;
  let _tmp$4 = rhs_offset;
  let _tmp$5 = rhs_limit;
  let _tmp$6 = find_minimal;
  _L: while (true) {
    const lhs_offset$2 = _tmp$2;
    const lhs_limit$2 = _tmp$3;
    const rhs_offset$2 = _tmp$4;
    const rhs_limit$2 = _tmp$5;
    const find_minimal$2 = _tmp$6;
    let lhs_offset$3;
    let rhs_offset$3;
    _L$2: {
      let _tmp$7 = lhs_offset$2;
      let _tmp$8 = rhs_offset$2;
      while (true) {
        const lhs_offset$4 = _tmp$7;
        const rhs_offset$4 = _tmp$8;
        if (lhs_offset$4 < lhs_limit$2 && (rhs_offset$4 < rhs_limit$2 && _M0MPC14diff17CompactedElements2atGsE(lhs, lhs_offset$4) === _M0MPC14diff17CompactedElements2atGsE(rhs, rhs_offset$4))) {
          _tmp$7 = lhs_offset$4 + 1 | 0;
          _tmp$8 = rhs_offset$4 + 1 | 0;
          continue;
        } else {
          lhs_offset$3 = lhs_offset$4;
          rhs_offset$3 = rhs_offset$4;
          break _L$2;
        }
      }
    }
    let lhs_limit$3;
    let rhs_limit$3;
    _L$3: {
      let _tmp$7 = lhs_limit$2;
      let _tmp$8 = rhs_limit$2;
      while (true) {
        const lhs_limit$4 = _tmp$7;
        const rhs_limit$4 = _tmp$8;
        if (lhs_limit$4 > lhs_offset$3 && (rhs_limit$4 > rhs_offset$3 && _M0MPC14diff17CompactedElements2atGsE(lhs, lhs_limit$4 - 1 | 0) === _M0MPC14diff17CompactedElements2atGsE(rhs, rhs_limit$4 - 1 | 0))) {
          _tmp$7 = lhs_limit$4 - 1 | 0;
          _tmp$8 = rhs_limit$4 - 1 | 0;
          continue;
        } else {
          lhs_limit$3 = lhs_limit$4;
          rhs_limit$3 = rhs_limit$4;
          break _L$3;
        }
      }
    }
    if (lhs_offset$3 === lhs_limit$3) {
      let _tmp$7 = rhs_offset$3;
      while (true) {
        const y = _tmp$7;
        if (y < rhs_limit$3) {
          const _p = rhs;
          const _p$2 = _p._1;
          const _tmp$8 = y >>> 0 < _p$2.length ? _p$2[y] : $oob();
          if (_tmp$8 >>> 0 < rhs_change_markers.length) {
            rhs_change_markers[_tmp$8] = true;
          } else {
            $oob();
          }
          _tmp$7 = y + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    } else {
      if (rhs_offset$3 === rhs_limit$3) {
        let _tmp$7 = lhs_offset$3;
        while (true) {
          const x = _tmp$7;
          if (x < lhs_limit$3) {
            const _p = lhs;
            const _p$2 = _p._1;
            const _tmp$8 = x >>> 0 < _p$2.length ? _p$2[x] : $oob();
            if (_tmp$8 >>> 0 < lhs_change_markers.length) {
              lhs_change_markers[_tmp$8] = true;
            } else {
              $oob();
            }
            _tmp$7 = x + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      } else {
        const partition = _M0FPC14diff4diagGsE(forward_search_diagonal, backward_search_diagonal, diagonal_shift, lhs, rhs, lhs_offset$3, lhs_limit$3, rhs_offset$3, rhs_limit$3, too_expensive, find_minimal$2);
        _M0FPC14diff10diff__loopN15loop__recursiveS103GsE(_env, lhs_offset$3, partition.lhs_midpoint, rhs_offset$3, partition.rhs_midpoint, partition.lo_minimal);
        _tmp$2 = partition.lhs_midpoint;
        _tmp$3 = lhs_limit$3;
        _tmp$4 = partition.rhs_midpoint;
        _tmp$5 = rhs_limit$3;
        _tmp$6 = partition.hi_minimal;
        continue;
      }
    }
  }
}
function _M0FPC14diff10diff__loopGsE(cutoff, lhs, rhs) {
  const forward_search_diagonal = $make_array_len_and_init((lhs._1.length + rhs._1.length | 0) + 3 | 0, 0);
  const backward_search_diagonal = $make_array_len_and_init((lhs._1.length + rhs._1.length | 0) + 3 | 0, 0);
  const diagonal_shift = rhs._1.length + 1 | 0;
  let too_expensive;
  if (cutoff === undefined) {
    const diags = (lhs._1.length + rhs._1.length | 0) + 3 | 0;
    let _tmp$2 = 1;
    let _tmp$3 = diags;
    while (true) {
      const acc = _tmp$2;
      const diags_cur = _tmp$3;
      if (diags_cur !== 0) {
        _tmp$2 = acc << 1;
        _tmp$3 = diags_cur >> 2;
        continue;
      } else {
        const _p = 4096;
        too_expensive = acc > _p ? acc : _p;
        break;
      }
    }
  } else {
    const _Some = cutoff;
    too_expensive = _Some;
  }
  const _p = lhs._0;
  const lhs_change_markers = $make_array_len_and_init(_p.end - _p.start | 0, true);
  const _p$2 = rhs._0;
  const rhs_change_markers = $make_array_len_and_init(_p$2.end - _p$2.start | 0, true);
  const _bind$3 = lhs._1.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      const _p$3 = lhs;
      const _p$4 = _p$3._1;
      const _tmp$3 = i >>> 0 < _p$4.length ? _p$4[i] : $oob();
      if (_tmp$3 >>> 0 < lhs_change_markers.length) {
        lhs_change_markers[_tmp$3] = false;
      } else {
        $oob();
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = rhs._1.length;
  let _tmp$3 = 0;
  while (true) {
    const j = _tmp$3;
    if (j < _bind$4) {
      const _p$3 = rhs;
      const _p$4 = _p$3._1;
      const _tmp$4 = j >>> 0 < _p$4.length ? _p$4[j] : $oob();
      if (_tmp$4 >>> 0 < rhs_change_markers.length) {
        rhs_change_markers[_tmp$4] = false;
      } else {
        $oob();
      }
      _tmp$3 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _env = { _0: backward_search_diagonal, _1: diagonal_shift, _2: too_expensive, _3: rhs, _4: forward_search_diagonal, _5: lhs, _6: rhs_change_markers, _7: lhs_change_markers };
  _M0FPC14diff10diff__loopN15loop__recursiveS103GsE(_env, 0, lhs._1.length, 0, rhs._1.length, false);
  return { _0: lhs_change_markers, _1: rhs_change_markers };
}
function _M0FPC14diff13make__indexerGsE(a, b) {
  const n = a.end - a.start | 0;
  const _bind$3 = [];
  const present = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$3, 0, 0), b.end - b.start | 0);
  const _bind$4 = b.end - b.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      if (i < 0 || i >= (b.end - b.start | 0)) {
        $panic();
      }
      _M0MPB3Map3setGsbE(present, b.buf[b.start + i | 0], true);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const ai = $make_array_len_and_init(n, 0);
  let k = 0;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < n) {
      if (i < 0 || i >= (a.end - a.start | 0)) {
        $panic();
      }
      const _bind$5 = _M0MPB3Map3getGsbE(present, a.buf[a.start + i | 0]);
      if (_bind$5 === -1) {
      } else {
        const _tmp$4 = k;
        if (_tmp$4 >>> 0 < ai.length) {
          ai[_tmp$4] = i;
        } else {
          $oob();
        }
        k = k + 1 | 0;
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const result = $make_array_len_and_init(k, 0);
  const _bind$5 = k;
  let _tmp$4 = 0;
  while (true) {
    const i = _tmp$4;
    if (i < _bind$5) {
      if (i >>> 0 < result.length) {
        result[i] = i >>> 0 < ai.length ? ai[i] : $oob();
      } else {
        $oob();
      }
      _tmp$4 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return result;
}
function _M0FPC14diff6diff__GsE(cutoff, lhs, rhs) {
  const lhs_indices = _M0FPC14diff13make__indexerGsE(lhs, rhs);
  const rhs_indices = _M0FPC14diff13make__indexerGsE(rhs, lhs);
  const lhs$2 = { _0: lhs, _1: lhs_indices };
  const rhs$2 = { _0: rhs, _1: rhs_indices };
  return _M0FPC14diff10diff__loopGsE(cutoff, lhs$2, rhs$2);
}
function _M0FPC14diff13iter__matchesGsE(cutoff, old, new_) {
  const _bind$3 = _M0FPC14diff6diff__GsE(cutoff, old, new_);
  const _d1 = _bind$3._0;
  const _d2 = _bind$3._1;
  const i1 = new _M0TPB8MutLocalGiE(0);
  const i2 = new _M0TPB8MutLocalGiE(0);
  const go = () => {
    while (true) {
      if (i1.val < _d1.length && i2.val < _d2.length) {
        const _tmp$2 = i1.val;
        if (!(_tmp$2 >>> 0 < _d1.length ? _d1[_tmp$2] : $oob())) {
          const _tmp$3 = i2.val;
          if (!(_tmp$3 >>> 0 < _d2.length ? _d2[_tmp$3] : $oob())) {
            const matching_pair = { _0: i1.val, _1: i2.val };
            i1.val = i1.val + 1 | 0;
            i2.val = i2.val + 1 | 0;
            return matching_pair;
          }
          i2.val = i2.val + 1 | 0;
        } else {
          const _tmp$3 = i2.val;
          if (!(_tmp$3 >>> 0 < _d2.length ? _d2[_tmp$3] : $oob())) {
            i1.val = i1.val + 1 | 0;
          } else {
            i1.val = i1.val + 1 | 0;
            i2.val = i2.val + 1 | 0;
          }
        }
        continue;
      } else {
        break;
      }
    }
    return undefined;
  };
  return _M0MPB5Iter23newGiiE(go, undefined);
}
function _M0FPC14diff22append__myers__matchesGsE(matches, cutoff, old, new_, old_offset, new_offset) {
  const _it = _M0FPC14diff13iter__matchesGsE(cutoff, old, new_);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGiiE(_it);
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _old_idx = _x._0;
      const _new_idx = _x._1;
      _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(matches, { _0: old_offset + _old_idx | 0, _1: new_offset + _new_idx | 0 });
      continue;
    }
  }
}
function _M0FPC14diff25append__patience__matchesGsE(matches, cutoff, old, new_, old_offset, new_offset) {
  const anchors = _M0FPC14diff11unique__lcsGsE(old, new_);
  if ((anchors.end - anchors.start | 0) === 0) {
    _M0FPC14diff22append__myers__matchesGsE(matches, cutoff, old, new_, old_offset, new_offset);
    return undefined;
  }
  let prev_old_idx = 0;
  let prev_new_idx = 0;
  const _bind$3 = anchors.end - anchors.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      if (i < 0 || i >= (anchors.end - anchors.start | 0)) {
        $panic();
      }
      const _bind$4 = anchors.buf[anchors.start + i | 0];
      const _old_idx = _bind$4._0;
      const _new_idx = _bind$4._1;
      const _bind$5 = prev_old_idx;
      const _bind$6 = old.end - old.start | 0;
      if (_bind$5 < 0 || (_bind$5 > _old_idx || _old_idx > _bind$6)) {
        $panic();
      }
      const _tmp$3 = new _M0TPB9ArrayViewGsE(old.buf, _bind$5 + old.start | 0, _old_idx + old.start | 0);
      const _bind$7 = prev_new_idx;
      const _bind$8 = new_.end - new_.start | 0;
      if (_bind$7 < 0 || (_bind$7 > _new_idx || _new_idx > _bind$8)) {
        $panic();
      }
      _M0FPC14diff22append__myers__matchesGsE(matches, cutoff, _tmp$3, new _M0TPB9ArrayViewGsE(new_.buf, _bind$7 + new_.start | 0, _new_idx + new_.start | 0), old_offset + prev_old_idx | 0, new_offset + prev_new_idx | 0);
      _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(matches, { _0: old_offset + _old_idx | 0, _1: new_offset + _new_idx | 0 });
      prev_old_idx = _old_idx + 1 | 0;
      prev_new_idx = _new_idx + 1 | 0;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = prev_old_idx;
  const _bind$5 = old.end - old.start | 0;
  const _bind$6 = old.end - old.start | 0;
  if (_bind$4 < 0 || (_bind$4 > _bind$5 || _bind$5 > _bind$6)) {
    $panic();
  }
  const _tmp$3 = new _M0TPB9ArrayViewGsE(old.buf, _bind$4 + old.start | 0, _bind$5 + old.start | 0);
  const _bind$7 = prev_new_idx;
  const _bind$8 = new_.end - new_.start | 0;
  const _bind$9 = new_.end - new_.start | 0;
  if (_bind$7 < 0 || (_bind$7 > _bind$8 || _bind$8 > _bind$9)) {
    $panic();
  }
  _M0FPC14diff22append__myers__matchesGsE(matches, cutoff, _tmp$3, new _M0TPB9ArrayViewGsE(new_.buf, _bind$7 + new_.start | 0, _bind$8 + new_.start | 0), old_offset + prev_old_idx | 0, new_offset + prev_new_idx | 0);
}
function _M0FPC14diff16collect__matchesGsE(cutoff, old, new_, algorithm) {
  const matches = [];
  if (algorithm === 1) {
    _M0FPC14diff25append__patience__matchesGsE(matches, cutoff, old, new_, 0, 0);
  } else {
    _M0FPC14diff22append__myers__matchesGsE(matches, cutoff, old, new_, 0, 0);
  }
  return matches;
}
function _M0MPC14diff4Diff5editsGsE(self) {
  const _bind$3 = self.edits;
  return new _M0TPB9ArrayViewGRPC14diff4EditE(_bind$3, 0, _bind$3.length);
}
function _M0MPC14diff4Diff12Diff_2einnerGsE(old, new_, cutoff, algorithm) {
  const result = [];
  const matches = _M0FPC14diff16collect__matchesGsE(cutoff, old, new_, algorithm);
  let prev_old_idx = 0;
  let prev_new_idx = 0;
  let equal_old_idx = 0;
  let equal_new_idx = 0;
  let consecutive_equal_length = 0;
  const _bind$3 = matches.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const pair = matches[_];
      const _old_idx = pair._0;
      const _new_idx = pair._1;
      if (prev_old_idx !== _old_idx) {
        if (consecutive_equal_length !== 0) {
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, new _M0DTPC14diff4Edit5Equal(equal_old_idx, equal_new_idx, consecutive_equal_length));
        }
        consecutive_equal_length = 0;
        _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, new _M0DTPC14diff4Edit6Delete(prev_old_idx, _old_idx - prev_old_idx | 0, prev_new_idx));
        prev_old_idx = _old_idx;
      }
      if (prev_new_idx !== _new_idx) {
        if (consecutive_equal_length !== 0) {
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, new _M0DTPC14diff4Edit5Equal(equal_old_idx, equal_new_idx, consecutive_equal_length));
        }
        consecutive_equal_length = 0;
        _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, new _M0DTPC14diff4Edit6Insert(prev_old_idx, prev_new_idx, _new_idx - prev_new_idx | 0));
      }
      prev_old_idx = _old_idx + 1 | 0;
      prev_new_idx = _new_idx + 1 | 0;
      if (consecutive_equal_length === 0) {
        equal_old_idx = _old_idx;
        equal_new_idx = _new_idx;
        consecutive_equal_length = 1;
      } else {
        consecutive_equal_length = consecutive_equal_length + 1 | 0;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      if (consecutive_equal_length !== 0) {
        _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, new _M0DTPC14diff4Edit5Equal(equal_old_idx, equal_new_idx, consecutive_equal_length));
      }
      if (prev_old_idx !== (old.end - old.start | 0)) {
        _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, new _M0DTPC14diff4Edit6Delete(prev_old_idx, (old.end - old.start | 0) - prev_old_idx | 0, prev_new_idx));
        prev_old_idx = old.end - old.start | 0;
      }
      if (prev_new_idx !== (new_.end - new_.start | 0)) {
        _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(result, new _M0DTPC14diff4Edit6Insert(prev_old_idx, prev_new_idx, (new_.end - new_.start | 0) - prev_new_idx | 0));
      }
      return new _M0TPC14diff4DiffGsE(old, new_, result);
    }
  }
}
function _M0MPC14diff4Diff13group_2einnerGsE(self, context) {
  return _M0FPC14diff20group__edits_2einnerGsE(self.edits, context, self.old, self.new);
}
function _M0MPC15queue5Queue5QueueGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(arr) {
  return _M0MPC15deque5Deque5DequeGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(arr, undefined);
}
function _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, x) {
  _M0MPC15deque5Deque10push__backGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self, x);
}
function _M0MPC15queue5Queue3popGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self) {
  return _M0MPC15deque5Deque10pop__frontGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self);
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview17chars__to__string(chars, start, end) {
  const buffer = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let i = start;
  while (true) {
    if (i < end && i < chars.length) {
      _M0IPB13StringBuilderPB6Logger11write__char(buffer, _M0MPC15array5Array2atGcE(chars, i));
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return buffer.val;
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview11word__spans(old_line, new_line) {
  const old_chars = _M0MPB4Iter9to__arrayGcE(_M0MPC16string6String4iter(old_line));
  const new_chars = _M0MPB4Iter9to__arrayGcE(_M0MPC16string6String4iter(new_line));
  const script = _M0FPC14diff18levenshtein__editsGcE(new _M0TPB9ArrayViewGcE(old_chars, 0, old_chars.length), new _M0TPB9ArrayViewGcE(new_chars, 0, new_chars.length));
  const old_spans = [];
  const new_spans = [];
  const _bind$3 = script.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const edit = script[_];
      switch (edit.$tag) {
        case 2: {
          const _Equal = edit;
          const _old_index = _Equal._0;
          const _new_index = _Equal._1;
          const _len = _Equal._2;
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(old_spans, new _M0TP211Mr_2dHoujie14mbt_2ddiffview8WordSpan(0, _M0FP211Mr_2dHoujie14mbt_2ddiffview17chars__to__string(old_chars, _old_index, _old_index + _len | 0)));
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(new_spans, new _M0TP211Mr_2dHoujie14mbt_2ddiffview8WordSpan(0, _M0FP211Mr_2dHoujie14mbt_2ddiffview17chars__to__string(new_chars, _new_index, _new_index + _len | 0)));
          break;
        }
        case 0: {
          const _Delete = edit;
          const _old_index$2 = _Delete._0;
          const _old_len = _Delete._1;
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(old_spans, new _M0TP211Mr_2dHoujie14mbt_2ddiffview8WordSpan(1, _M0FP211Mr_2dHoujie14mbt_2ddiffview17chars__to__string(old_chars, _old_index$2, _old_index$2 + _old_len | 0)));
          break;
        }
        case 1: {
          const _Insert = edit;
          const _new_index$2 = _Insert._1;
          const _new_len = _Insert._2;
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(new_spans, new _M0TP211Mr_2dHoujie14mbt_2ddiffview8WordSpan(2, _M0FP211Mr_2dHoujie14mbt_2ddiffview17chars__to__string(new_chars, _new_index$2, _new_index$2 + _new_len | 0)));
          break;
        }
        default: {
          const _Replace = edit;
          const _old_index$3 = _Replace._0;
          const _new_index$3 = _Replace._1;
          const _len$2 = _Replace._2;
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(old_spans, new _M0TP211Mr_2dHoujie14mbt_2ddiffview8WordSpan(1, _M0FP211Mr_2dHoujie14mbt_2ddiffview17chars__to__string(old_chars, _old_index$3, _old_index$3 + _len$2 | 0)));
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(new_spans, new _M0TP211Mr_2dHoujie14mbt_2ddiffview8WordSpan(2, _M0FP211Mr_2dHoujie14mbt_2ddiffview17chars__to__string(new_chars, _new_index$3, _new_index$3 + _len$2 | 0)));
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: old_spans, _1: new_spans };
}
function _M0MP211Mr_2dHoujie14mbt_2ddiffview11DiffOptions6create(algorithm, context, word_level) {
  return new _M0TP211Mr_2dHoujie14mbt_2ddiffview11DiffOptions(algorithm, context, word_level);
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview12split__lines(text) {
  const lines = [];
  if (text === "") {
    return lines;
  }
  const buffer = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$3 = text.length;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = text.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = text.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            const _tmp$3 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$3 = _string_index + 1 | 0;
            const _p = _bind$4;
            _decoded_next_string_index = _tmp$3;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$3 = _string_index + 1 | 0;
          const _p = _bind$4;
          _decoded_next_string_index = _tmp$3;
          _decoded_char = _p;
          break _L;
        }
      }
      if (_decoded_char === 10) {
        _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(lines, buffer.val);
        _M0MPB13StringBuilder5reset(buffer);
      } else {
        if (_decoded_char !== 13) {
          _M0IPB13StringBuilderPB6Logger11write__char(buffer, _decoded_char);
        }
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  if (!_M0MPC16string6String11has__suffix(text, new _M0TPC16string10StringView(_M0FP211Mr_2dHoujie14mbt_2ddiffview12split__linesN7_2abindS178, 0, _M0FP211Mr_2dHoujie14mbt_2ddiffview12split__linesN7_2abindS178.length))) {
    _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(lines, buffer.val);
  }
  return lines;
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview10equal__row(old_line, new_line, old_no, new_no) {
  return new _M0TP211Mr_2dHoujie14mbt_2ddiffview3Row(0, old_line, new_line, [], [], old_no, new_no);
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview11delete__row(line, number) {
  return new _M0TP211Mr_2dHoujie14mbt_2ddiffview3Row(1, line, undefined, [], [], number, undefined);
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview11insert__row(line, number) {
  return new _M0TP211Mr_2dHoujie14mbt_2ddiffview3Row(2, undefined, line, [], [], undefined, number);
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview11change__row(old_line, new_line, old_no, new_no, word_level) {
  const _bind$3 = word_level && (old_line.length <= 2000 && new_line.length <= 2000) ? _M0FP211Mr_2dHoujie14mbt_2ddiffview11word__spans(old_line, new_line) : { _0: [], _1: [] };
  const _old_spans = _bind$3._0;
  const _new_spans = _bind$3._1;
  return new _M0TP211Mr_2dHoujie14mbt_2ddiffview3Row(3, old_line, new_line, _old_spans, _new_spans, old_no, new_no);
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview11build__rows(old_lines, new_lines, edits, word_level) {
  const rows = [];
  let i = 0;
  while (true) {
    if (i < (edits.end - edits.start | 0)) {
      const _bind$3 = i;
      if (_bind$3 < 0 || _bind$3 >= (edits.end - edits.start | 0)) {
        $panic();
      }
      const _bind$4 = edits.buf[edits.start + _bind$3 | 0];
      switch (_bind$4.$tag) {
        case 2: {
          const _Equal = _bind$4;
          const _old_index = _Equal._0;
          const _new_index = _Equal._1;
          const _len = _Equal._2;
          let k = 0;
          while (true) {
            if (k < _len) {
              _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(rows, _M0FP211Mr_2dHoujie14mbt_2ddiffview10equal__row(_M0MPC15array5Array2atGsE(old_lines, _old_index + k | 0), _M0MPC15array5Array2atGsE(new_lines, _new_index + k | 0), (_old_index + k | 0) + 1 | 0, (_new_index + k | 0) + 1 | 0));
              k = k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          i = i + 1 | 0;
          break;
        }
        case 0: {
          const _Delete = _bind$4;
          const _old_index$2 = _Delete._0;
          const _old_len = _Delete._1;
          let paired = false;
          if ((i + 1 | 0) < (edits.end - edits.start | 0)) {
            const _bind$5 = i + 1 | 0;
            if (_bind$5 < 0 || _bind$5 >= (edits.end - edits.start | 0)) {
              $panic();
            }
            const _bind$6 = edits.buf[edits.start + _bind$5 | 0];
            if (_bind$6.$tag === 1) {
              const _Insert = _bind$6;
              const _new_index$2 = _Insert._1;
              const _new_len = _Insert._2;
              const pair_count = _old_len < _new_len ? _old_len : _new_len;
              let k$2 = 0;
              while (true) {
                if (k$2 < pair_count) {
                  _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(rows, _M0FP211Mr_2dHoujie14mbt_2ddiffview11change__row(_M0MPC15array5Array2atGsE(old_lines, _old_index$2 + k$2 | 0), _M0MPC15array5Array2atGsE(new_lines, _new_index$2 + k$2 | 0), (_old_index$2 + k$2 | 0) + 1 | 0, (_new_index$2 + k$2 | 0) + 1 | 0, word_level));
                  k$2 = k$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              while (true) {
                if (k$2 < _old_len) {
                  _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(rows, _M0FP211Mr_2dHoujie14mbt_2ddiffview11delete__row(_M0MPC15array5Array2atGsE(old_lines, _old_index$2 + k$2 | 0), (_old_index$2 + k$2 | 0) + 1 | 0));
                  k$2 = k$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              while (true) {
                if (k$2 < _new_len) {
                  _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(rows, _M0FP211Mr_2dHoujie14mbt_2ddiffview11insert__row(_M0MPC15array5Array2atGsE(new_lines, _new_index$2 + k$2 | 0), (_new_index$2 + k$2 | 0) + 1 | 0));
                  k$2 = k$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              i = i + 2 | 0;
              paired = true;
            }
          }
          if (!paired) {
            let k$2 = 0;
            while (true) {
              if (k$2 < _old_len) {
                _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(rows, _M0FP211Mr_2dHoujie14mbt_2ddiffview11delete__row(_M0MPC15array5Array2atGsE(old_lines, _old_index$2 + k$2 | 0), (_old_index$2 + k$2 | 0) + 1 | 0));
                k$2 = k$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            i = i + 1 | 0;
          }
          break;
        }
        default: {
          const _Insert = _bind$4;
          const _new_index$2 = _Insert._1;
          const _new_len = _Insert._2;
          let k$2 = 0;
          while (true) {
            if (k$2 < _new_len) {
              _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(rows, _M0FP211Mr_2dHoujie14mbt_2ddiffview11insert__row(_M0MPC15array5Array2atGsE(new_lines, _new_index$2 + k$2 | 0), (_new_index$2 + k$2 | 0) + 1 | 0));
              k$2 = k$2 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          i = i + 1 | 0;
        }
      }
      continue;
    } else {
      break;
    }
  }
  return rows;
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview14compute__stats(rows) {
  let added = 0;
  let removed = 0;
  let changed = 0;
  let unchanged = 0;
  const _bind$3 = rows.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const row = rows[_];
      const _bind$4 = row.kind;
      switch (_bind$4) {
        case 0: {
          unchanged = unchanged + 1 | 0;
          break;
        }
        case 1: {
          removed = removed + 1 | 0;
          break;
        }
        case 2: {
          added = added + 1 | 0;
          break;
        }
        default: {
          changed = changed + 1 | 0;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP211Mr_2dHoujie14mbt_2ddiffview9DiffStats(added, removed, changed, unchanged);
}
function _M0FP211Mr_2dHoujie14mbt_2ddiffview10diff__text(old_text, new_text, options) {
  const old_lines = _M0FP211Mr_2dHoujie14mbt_2ddiffview12split__lines(old_text);
  const new_lines = _M0FP211Mr_2dHoujie14mbt_2ddiffview12split__lines(new_text);
  const _bind$3 = options.algorithm;
  let algorithm;
  if (_bind$3 === 0) {
    algorithm = 0;
  } else {
    algorithm = 1;
  }
  const comparison = _M0MPC14diff4Diff12Diff_2einnerGsE(new _M0TPB9ArrayViewGsE(old_lines, 0, old_lines.length), new _M0TPB9ArrayViewGsE(new_lines, 0, new_lines.length), undefined, algorithm);
  const rows = _M0FP211Mr_2dHoujie14mbt_2ddiffview11build__rows(old_lines, new_lines, _M0MPC14diff4Diff5editsGsE(comparison), options.word_level);
  const patch_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$4 = _M0MPC14diff4Diff13group_2einnerGsE(comparison, options.context);
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const hunk = _bind$4[_];
      _M0IPB13StringBuilderPB6Logger13write__string(patch_builder, _M0MPC14diff4Hunk6renderGsE(hunk, (line) => line));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP211Mr_2dHoujie14mbt_2ddiffview10DiffResult(rows, _M0FP211Mr_2dHoujie14mbt_2ddiffview14compute__stats(rows), patch_builder.val);
}
function _M0MP319moonbit_2dcommunity7rabbita6common5Mouse3new(screen, offset, client) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common5Mouse(screen, offset, client);
}
function _M0MP319moonbit_2dcommunity7rabbita6common8Keyboard3new(key, code, alt_key, ctrl_key, shift_key, meta_key, is_composing, repeat, location) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common8Keyboard(key, code, alt_key, ctrl_key, shift_key, meta_key, is_composing, repeat, location);
}
function _M0MP319moonbit_2dcommunity7rabbita6common6Scroll3new(offset, width, height) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common6Scroll(offset, width, height);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(x) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(x);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7slotmap2IdPB4Hash13hash__combine(_x_37, _x_38) {
  _M0IPC14uint4UIntPB4Hash13hash__combine(_x_37.gen, _x_38);
  _M0IPC13int3IntPB4Hash13hash__combine(_x_37.idx, _x_38);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE() {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE([], [], []);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena) {
  const _bind$3 = _M0MPC15array5Array3popGiE(arena.free);
  if (_bind$3 === undefined) {
    const idx = arena.slots.length;
    _M0MPC15array5Array4pushGjE(arena.gens, 0);
    _M0MPC15array5Array4pushGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, undefined);
    return new _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap2Id(0, idx);
  } else {
    const _Some = _bind$3;
    const _idx = _Some;
    const gen = _M0MPC15array5Array2atGjE(arena.gens, _idx);
    _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx, undefined);
    return new _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap2Id(gen, _idx);
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id, value) {
  const _gen = id.gen;
  const _idx = id.idx;
  if (_idx !== -1) {
    if (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen) {
      _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx, value);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    $panic();
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap14allocate__withGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena, f) {
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena);
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id, f(id));
  return id;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4freeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id) {
  const _gen = id.gen;
  const _idx = id.idx;
  if (_idx !== -1) {
    if (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen) {
      const _bind$3 = _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena.slots, _idx);
      if (_bind$3 === undefined) {
        $panic();
        return;
      } else {
        _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx, undefined);
        const _array_1 = arena.gens;
        _M0MPC15array5Array3setGjE(_array_1, _idx, (_M0MPC15array5Array2atGjE(_array_1, _idx) >>> 0) + (1 >>> 0) | 0);
        _M0MPC15array5Array4pushGiE(arena.free, _idx);
        return;
      }
    } else {
      $panic();
      return;
    }
  } else {
    $panic();
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena, id) {
  const _gen = id.gen;
  const _idx = id.idx;
  return _idx !== -1 ? (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen ? _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena.slots, _idx) : undefined) : undefined;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena, id) {
  const _gen = id.gen;
  const _idx = id.idx;
  if (_idx !== -1) {
    if (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen) {
      const _bind$3 = _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena.slots, _idx);
      if (_bind$3 === undefined) {
        return $panic();
      } else {
        const _Some = _bind$3;
        return _Some;
      }
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function _M0FP411moonbitlang5async8internal9coroutine18current__coroutine() {
  const _p = _M0FP411moonbitlang5async8internal9coroutine9scheduler.curr_coro;
  if (_p === undefined) {
    return $panic();
  } else {
    const _p$2 = _p;
    return _p$2;
  }
}
function _M0FP411moonbitlang5async8internal9coroutine29has__immediately__ready__task() {
  const _p = _M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later;
  return !(_p.len === 0);
}
function _M0FP411moonbitlang5async8internal9coroutine10reschedule() {
  const _p = _M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later;
  const n = _p.len;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < n) {
      const _bind$3 = _M0MPC15deque5Deque10pop__frontGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later);
      if (_bind$3 === undefined) {
        return;
      } else {
        const _Some = _bind$3;
        const _coro = _Some;
        _coro.ready = false;
        const _bind$4 = _coro.state;
        if (_bind$4.$tag === 4) {
          const _Suspend = _bind$4;
          const _cont = _Suspend._0;
          _coro.state = _M0DTP411moonbitlang5async8internal9coroutine5State7Running__;
          const last_coro = _M0FP411moonbitlang5async8internal9coroutine9scheduler.curr_coro;
          _M0FP411moonbitlang5async8internal9coroutine9scheduler.curr_coro = _coro;
          if (_coro.cancelled && !_coro.shielded) {
            _cont(1);
          } else {
            _cont(0);
          }
          _M0FP411moonbitlang5async8internal9coroutine9scheduler.curr_coro = last_coro;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP411moonbitlang5async8internal9coroutine9CoroutinePB4Hash13hash__combine(self, hasher) {
  _M0IPC13int3IntPB4Hash13hash__combine(self.coro_id, hasher);
}
function _M0MP411moonbitlang5async8internal9coroutine9Coroutine4wake(self) {
  if (!self.ready) {
    self.ready = true;
    _M0MPC15deque5Deque10push__backGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later, self);
    return;
  } else {
    return;
  }
}
function _M0MP411moonbitlang5async8internal9coroutine9Coroutine6cancel(self) {
  self.cancelled = true;
  if (!self.shielded) {
    _M0MP411moonbitlang5async8internal9coroutine9Coroutine4wake(self);
    return;
  } else {
    return;
  }
}
function _M0FP411moonbitlang5async8internal9coroutine5spawnN7_2acontS262(_param) {}
function _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS263(_state) {
  let _tmp$2 = _state;
  _L: while (true) {
    const _state$2 = _tmp$2;
    switch (_state$2.$tag) {
      case 0: {
        const _State_0 = _state$2;
        const coro = _State_0._1;
        const _it = _M0MPC13set3Set4iterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(coro.downstream);
        while (true) {
          const _bind$3 = _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_it);
          if (_bind$3 === undefined) {
            break;
          } else {
            const _Some = _bind$3;
            const _coro = _Some;
            _M0MP411moonbitlang5async8internal9coroutine9Coroutine4wake(_coro);
            continue;
          }
        }
        return _M0MPC13set3Set6removeGRP411moonbitlang5async8internal9coroutine9CoroutineE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.all_coros, coro);
      }
      case 1: {
        const _$42$try$47$93 = _state$2;
        const coro$2 = _$42$try$47$93._1;
        const _try_err = _$42$try$47$93._0;
        coro$2.state = new _M0DTP411moonbitlang5async8internal9coroutine5State4Fail(_try_err);
        _tmp$2 = new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__0(undefined, coro$2);
        continue _L;
      }
      case 2: {
        const _State_2 = _state$2;
        const coro$3 = _State_2._1;
        const _bind$3 = coro$3.state;
        if (_bind$3.$tag === 3) {
          coro$3.state = _M0DTP411moonbitlang5async8internal9coroutine5State4Done__;
          _tmp$2 = new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__0(undefined, coro$3);
          continue _L;
        } else {
          _tmp$2 = new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__0(undefined, coro$3);
          continue _L;
        }
      }
      default: {
        const _$42$cancellation_handler$47$96 = _state$2;
        const coro$4 = _$42$cancellation_handler$47$96._1;
        const _err = _$42$cancellation_handler$47$96._0;
        if (_err.$tag === 4) {
          coro$4.state = _M0DTP411moonbitlang5async8internal9coroutine5State9Cancelled__;
          _tmp$2 = new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__2(undefined, coro$4);
          continue _L;
        } else {
          _tmp$2 = new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State11_2atry_2f93(_err, coro$4);
          continue _L;
        }
      }
    }
  }
}
function _M0FP411moonbitlang5async8internal9coroutine5spawn(f, loc) {
  _M0FP411moonbitlang5async8internal9coroutine9scheduler.coro_id = _M0FP411moonbitlang5async8internal9coroutine9scheduler.coro_id + 1 | 0;
  const _bind$3 = _M0DTP411moonbitlang5async8internal9coroutine5State7Running__;
  const _bind$4 = [];
  const _bind$5 = _M0MPC13set3Set3SetGRP411moonbitlang5async8internal9coroutine9CoroutineE(new _M0TPB9ArrayViewGRP411moonbitlang5async8internal9coroutine9CoroutineE(_bind$4, 0, 0), undefined);
  const _bind$6 = _M0FP411moonbitlang5async8internal9coroutine9scheduler.coro_id;
  const coro = new _M0TP411moonbitlang5async8internal9coroutine9Coroutine(_bind$6, _bind$3, false, false, true, _bind$5, loc);
  const run = (_discard_) => {
    let _err;
    _L: {
      _L$2: {
        const _bind$7 = f((_cont_param) => {
          const _bind$8 = _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS263(new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__2(_cont_param, coro));
          if (_bind$8 === -1) {
            return;
          } else {
            const _Some = _bind$8;
            const _payload = _Some;
            _M0FP411moonbitlang5async8internal9coroutine5spawnN7_2acontS262(_payload);
            return;
          }
        }, (_cont_param) => {
          const _bind$8 = _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS263(new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State29_2acancellation__handler_2f96(_cont_param, coro));
          if (_bind$8 === -1) {
            return;
          } else {
            const _Some = _bind$8;
            const _payload = _Some;
            _M0FP411moonbitlang5async8internal9coroutine5spawnN7_2acontS262(_payload);
            return;
          }
        });
        let _bind$8;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _bind$8 = _ok._0;
        } else {
          const _err$2 = _bind$7;
          _err = _err$2._0;
          break _L$2;
        }
        if (_bind$8 === -1) {
        } else {
          const _Some = _bind$8;
          const _payload = _Some;
          _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS263(new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State8State__2(_payload, coro));
        }
        break _L;
      }
      _M0FP411moonbitlang5async8internal9coroutine5spawnN16_2aasync__driverS263(new _M0DTP411moonbitlang5async8internal9coroutine79_24moonbitlang_2fasync_2finternal_2fcoroutine_2espawn_2erun_2f18_2elambda_2f261L5State29_2acancellation__handler_2f96(_err, coro));
    }
  };
  coro.state = new _M0DTP411moonbitlang5async8internal9coroutine5State7Suspend(run);
  _M0MPC15deque5Deque10push__backGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.run_later, coro);
  _M0MPC13set3Set3addGRP411moonbitlang5async8internal9coroutine9CoroutineE(_M0FP411moonbitlang5async8internal9coroutine9scheduler.all_coros, coro);
  return coro;
}
function _M0FP411moonbitlang5async8internal9coroutine20handle__cancellationN16_2aasync__driverS349GuE(_state) {
  if (_state.$tag === 0) {
    const _$42$cancellation_handler$47$171 = _state;
    const _err = _$42$cancellation_handler$47$171._0;
    if (_err.$tag === 4) {
      return new _M0DTPC16result6ResultGOOuRPC15error5ErrorE2Ok(new _M0DTPC16option6OptionGOuE4Some(-1));
    } else {
      return new _M0DTPC16result6ResultGOOuRPC15error5ErrorE3Err(_err);
    }
  } else {
    const _State_1 = _state;
    const _cont_param = _State_1._0;
    return new _M0DTPC16result6ResultGOOuRPC15error5ErrorE2Ok(new _M0DTPC16option6OptionGOuE4Some(_cont_param));
  }
}
function _M0FP411moonbitlang5async8internal9coroutine20handle__cancellationGuE(f, _cont, _err_cont) {
  let _err;
  _L: {
    const _bind$3 = f((_cont_param) => {
      let _err$2;
      _L$2: {
        const _bind$4 = _M0FP411moonbitlang5async8internal9coroutine20handle__cancellationN16_2aasync__driverS349GuE(new _M0DTP411moonbitlang5async8internal9coroutine68_24moonbitlang_2fasync_2finternal_2fcoroutine_2ehandle__cancellationL5StateGuE8State__1(_cont_param));
        let _tmp$2;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$2 = _ok._0;
        } else {
          const _err$3 = _bind$4;
          _err$2 = _err$3._0;
          break _L$2;
        }
        const _tmp$3 = _tmp$2;
        if (_tmp$3.$tag === 1) {
          const _Some = _tmp$3;
          const _payload = _Some._0;
          _cont(_payload);
          return;
        } else {
          return;
        }
      }
      _err_cont(_err$2);
    }, (_cont_param) => {
      let _err$2;
      _L$2: {
        const _bind$4 = _M0FP411moonbitlang5async8internal9coroutine20handle__cancellationN16_2aasync__driverS349GuE(new _M0DTP411moonbitlang5async8internal9coroutine68_24moonbitlang_2fasync_2finternal_2fcoroutine_2ehandle__cancellationL5StateGuE30_2acancellation__handler_2f171(_cont_param));
        let _tmp$2;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$2 = _ok._0;
        } else {
          const _err$3 = _bind$4;
          _err$2 = _err$3._0;
          break _L$2;
        }
        const _tmp$3 = _tmp$2;
        if (_tmp$3.$tag === 1) {
          const _Some = _tmp$3;
          const _payload = _Some._0;
          _cont(_payload);
          return;
        } else {
          return;
        }
      }
      _err_cont(_err$2);
    });
    let _bind$4;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _bind$4 = _ok._0;
    } else {
      const _err$2 = _bind$3;
      _err = _err$2._0;
      break _L;
    }
    if (_bind$4 === -1) {
      return new _M0DTPC16result6ResultGOOuRPC15error5ErrorE2Ok(_M0DTPC16option6OptionGOuE4None__);
    } else {
      const _Some = _bind$4;
      const _payload = _Some;
      return _M0FP411moonbitlang5async8internal9coroutine20handle__cancellationN16_2aasync__driverS349GuE(new _M0DTP411moonbitlang5async8internal9coroutine68_24moonbitlang_2fasync_2finternal_2fcoroutine_2ehandle__cancellationL5StateGuE8State__1(_payload));
    }
  }
  return _M0FP411moonbitlang5async8internal9coroutine20handle__cancellationN16_2aasync__driverS349GuE(new _M0DTP411moonbitlang5async8internal9coroutine68_24moonbitlang_2fasync_2finternal_2fcoroutine_2ehandle__cancellationL5StateGuE30_2acancellation__handler_2f171(_err));
}
function _M0FP411moonbitlang5async8internal11event__loop10reschedule() {
  const _p = _M0FP411moonbitlang5async8internal9coroutine9scheduler.all_coros;
  if (!(_p.size === 0)) {
    _M0FP411moonbitlang5async8internal9coroutine10reschedule();
    if (_M0FP411moonbitlang5async8internal9coroutine29has__immediately__ready__task()) {
      _M0FP411moonbitlang5async8internal11event__loop12set__timeout(0, _M0FP411moonbitlang5async8internal11event__loop10reschedule);
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS283GuE(_state) {
  let _tmp$2 = _state;
  _L: while (true) {
    const _state$2 = _tmp$2;
    switch (_state$2.$tag) {
      case 0: {
        const _$42$defer_try$47$133 = _state$2;
        const _defer = _$42$defer_try$47$133._1;
        const _err = _$42$defer_try$47$133._0;
        _defer();
        return new _M0DTPC16result6ResultGOuRPC15error5ErrorE3Err(_err);
      }
      case 1: {
        const _State_1 = _state$2;
        const _defer$2 = _State_1._1;
        const _cont_param = _State_1._0;
        _defer$2();
        return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(_cont_param);
      }
      case 2: {
        const _$42$try$47$138 = _state$2;
        const _defer$3 = _$42$try$47$138._2;
        const reject = _$42$try$47$138._1;
        const _try_err = _$42$try$47$138._0;
        if (_try_err.$tag === 4) {
          _tmp$2 = new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE19_2adefer__try_2f133(_try_err, _defer$3);
          continue _L;
        } else {
          _tmp$2 = new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE8State__1(reject(_M0FP15Error10to__string(_try_err)), _defer$3);
          continue _L;
        }
      }
      default: {
        const _State_3 = _state$2;
        const _defer$4 = _State_3._3;
        const reject$2 = _State_3._2;
        const resolve = _State_3._1;
        const _cont_param$2 = _State_3._0;
        if (_cont_param$2 === -1) {
          _tmp$2 = new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE8State__1(reject$2(_M0MP311moonbitlang5async9js__async7JsValue12abort__error()), _defer$4);
          continue _L;
        } else {
          const _Some = _cont_param$2;
          const _ret = _Some;
          _tmp$2 = new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE8State__1(resolve(_ret), _defer$4);
          continue _L;
        }
      }
    }
  }
}
function _M0MP311moonbitlang5async9js__async7Promise11from__asyncGuE(f, abort_signal) {
  const promise = _M0MP311moonbitlang5async9js__async7JsValue12new__promise((resolve, reject) => {
    _M0FP411moonbitlang5async8internal9coroutine5spawn((_cont, _err_cont) => {
      const coro = _M0FP411moonbitlang5async8internal9coroutine18current__coroutine();
      const abort_handler = () => {
        _M0MP411moonbitlang5async8internal9coroutine9Coroutine6cancel(coro);
      };
      if (abort_signal.$tag === 1) {
        const _Some = abort_signal;
        const _signal = _Some._0;
        _M0MP311moonbitlang5async9js__async11AbortSignal9on__abort(_signal, abort_handler);
      }
      const _defer = () => {
        if (abort_signal.$tag === 1) {
          const _Some = abort_signal;
          const _signal = _Some._0;
          _M0MP311moonbitlang5async9js__async11AbortSignal23remove__abort__listener(_signal, abort_handler);
          return;
        } else {
          return;
        }
      };
      if (abort_signal.$tag === 1) {
        const _Some = abort_signal;
        const _signal = _Some._0;
        if (_M0MP311moonbitlang5async9js__async11AbortSignal7aborted(_signal)) {
          _M0MP411moonbitlang5async8internal9coroutine9Coroutine6cancel(coro);
        }
      }
      let _err;
      _L: {
        const _bind$3 = _M0FP411moonbitlang5async8internal9coroutine20handle__cancellationGuE(f, (_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$4 = _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS283GuE(new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE8State__3(_cont_param, resolve, reject, _defer));
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              const _err$3 = _bind$4;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$5 === -1) {
              return;
            } else {
              const _Some = _bind$5;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        }, (_cont_param) => {
          let _err$2;
          _L$2: {
            const _bind$4 = _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS283GuE(new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE12_2atry_2f138(_cont_param, reject, _defer));
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              const _err$3 = _bind$4;
              _err$2 = _err$3._0;
              break _L$2;
            }
            if (_bind$5 === -1) {
              return;
            } else {
              const _Some = _bind$5;
              const _payload = _Some;
              _cont(_payload);
              return;
            }
          }
          _err_cont(_err$2);
        });
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          const _err$2 = _bind$3;
          _err = _err$2._0;
          break _L;
        }
        const _tmp$3 = _tmp$2;
        if (_tmp$3.$tag === 1) {
          const _Some = _tmp$3;
          const _payload = _Some._0;
          return _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS283GuE(new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE8State__3(_payload, resolve, reject, _defer));
        } else {
          return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
        }
      }
      return _M0MP311moonbitlang5async9js__async7Promise11from__asyncN16_2aasync__driverS283GuE(new _M0DTP311moonbitlang5async9js__async85_40moonbitlang_2fasync_2fjs__async_2ePromise_3a_3afrom__async_2elambda_2elambda_2f280L5StateGuE12_2atry_2f138(_err, reject, _defer));
    }, "src/js_async/js_async.mbt:215:13-239:7@moonbitlang/async");
  });
  _M0FP411moonbitlang5async8internal11event__loop10reschedule();
  return promise;
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self)) {
    $panic();
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional10to__optionGsE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined(self) ? undefined : _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) {
    $panic();
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(self) {
  return !_M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self) ? new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4Some(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) : _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE4None__;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value4null();
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGsE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value4null();
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS98(_discard_, _discard_$2, _discard_$3) {
  return new _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd3CmdRP319moonbit_2dcommunity7rabbita3cmd10HydrateExnE3Err(_M0DTPC15error5Error60moonbit_2dcommunity_2frabbita_2fcmd_2eHydrateExn_2eUnhandled__);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS101(_discard_, _discard_$2) {
  return new _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGURPB4JsonRP319moonbit_2dcommunity7rabbita3cmd3CmdEERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS103(_discard_) {
  return new _M0DTPC16result6ResultGsRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS105(_discard_) {
  return new _M0DTPC16result6ResultGRPC15debug4ReprRP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handlerN7_2abindS108(_discard_, _discard_$2) {
  return new _M0DTPC16result6ResultGRP319moonbit_2dcommunity7rabbita3cmd6OpContGRP319moonbit_2dcommunity7rabbita3cmd3CmdERP319moonbit_2dcommunity7rabbita3cmd9UnhandledE3Err(_M0DTPC15error5Error59moonbit_2dcommunity_2frabbita_2fcmd_2eUnhandled_2eUnhandled__);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostE(self, cmd) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, cmd);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostE(self, cmd) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, cmd);
}
function _M0MP319moonbit_2dcommunity7rabbita3cmd2Op2Op() {
  return new _M0TP319moonbit_2dcommunity7rabbita3cmd2Op(_M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.invoke, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.settle, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.resume_, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.identify, _M0FP319moonbit_2dcommunity7rabbita3cmd16default__handler.debug);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd6invoke(_discard_, op, extension, context) {
  const _func = op.invoke;
  return _func(extension, context);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd7flatten(key, cmd) {
  if (cmd.$tag === 0) {
    const _Batch = cmd;
    const _cmds = _Batch._0;
    const _p = new Array(_cmds.length);
    const _p$2 = _cmds.length;
    let _tmp$2 = 0;
    while (true) {
      const _p$3 = _tmp$2;
      if (_p$3 < _p$2) {
        const _p$4 = _cmds[_p$3];
        _p[_p$3] = _M0FP319moonbit_2dcommunity7rabbita3cmd7flatten(key, _p$4);
        _tmp$2 = _p$3 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0MPC15array5Array7flattenGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_p);
  } else {
    const _Invoke = cmd;
    const _op = _Invoke._0;
    const _extension = _Invoke._1;
    return [{ _0: _op, _1: _extension }];
  }
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom10get__style(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, v) {
  _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value(s, v);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child(s, child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child(s, child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, value, before) {
  _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before(s, value, before);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, other) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node(s, other);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__x(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__y(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__x(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__y(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s));
}
function _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE(exception) {
  _M0FP319moonbit_2dcommunity7rabbita3dom12console__log(exception);
  return $panic();
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, type_, callback) {
  _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener(s, type_, callback);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget24to__html__input__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom29ffi__to__html__input__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget25to__html__select__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__to__html__select__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement11as__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute(s, attr, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr) {
  _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute(s, attr);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property(s, prop, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property(s, prop);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16get__scroll__topGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__get__scroll__top(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17get__scroll__leftGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__get__scroll__left(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement18get__scroll__widthGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom32ffi__element__get__scroll__width(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement19get__scroll__heightGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom33ffi__element__get__scroll__height(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, html) {
  _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html(s, html);
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(self, namespace_uri, qualified_name, on_namespace_error$46$opt, on_invalid_character_error$46$opt) {
  let on_namespace_error;
  if (on_namespace_error$46$opt === undefined) {
    on_namespace_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_namespace_error$46$opt;
    on_namespace_error = _Some;
  }
  let on_invalid_character_error;
  if (on_invalid_character_error$46$opt === undefined) {
    on_invalid_character_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_invalid_character_error$46$opt;
    on_invalid_character_error = _Some;
  }
  return _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner(self, namespace_uri, qualified_name, on_namespace_error, on_invalid_character_error);
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document9get__head(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0FP319moonbit_2dcommunity7rabbita3dom24ffi__document__get__head(self));
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document9get__body(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0FP319moonbit_2dcommunity7rabbita3dom24ffi__document__get__body(self));
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document22get__document__element(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0FP319moonbit_2dcommunity7rabbita3dom37ffi__document__get__document__element(self));
}
function _M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(_x_35, _x_36) {
  switch (_x_35.$tag) {
    case 0: {
      const _Boolean = _x_35;
      const _$42$x0_37 = _Boolean._0;
      if (_x_36.$tag === 0) {
        const _Boolean$2 = _x_36;
        const _$42$y0_38 = _Boolean$2._0;
        return _$42$x0_37 === _$42$y0_38;
      } else {
        return false;
      }
    }
    case 1: {
      const _Integer = _x_35;
      const _$42$x0_39 = _Integer._0;
      if (_x_36.$tag === 1) {
        const _Integer$2 = _x_36;
        const _$42$y0_40 = _Integer$2._0;
        return _$42$x0_39 === _$42$y0_40;
      } else {
        return false;
      }
    }
    case 2: {
      const _Floating = _x_35;
      const _$42$x0_41 = _Floating._0;
      if (_x_36.$tag === 2) {
        const _Floating$2 = _x_36;
        const _$42$y0_42 = _Floating$2._0;
        return _$42$x0_41 === _$42$y0_42;
      } else {
        return false;
      }
    }
    default: {
      const _String = _x_35;
      const _$42$x0_43 = _String._0;
      if (_x_36.$tag === 3) {
        const _String$2 = _x_36;
        const _$42$y0_44 = _String$2._0;
        return _$42$x0_43 === _$42$y0_44;
      } else {
        return false;
      }
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom23is__html__void__element(tag) {
  switch (tag) {
    case "area": {
      return true;
    }
    case "base": {
      return true;
    }
    case "br": {
      return true;
    }
    case "col": {
      return true;
    }
    case "embed": {
      return true;
    }
    case "hr": {
      return true;
    }
    case "img": {
      return true;
    }
    case "input": {
      return true;
    }
    case "link": {
      return true;
    }
    case "meta": {
      return true;
    }
    case "param": {
      return true;
    }
    case "source": {
      return true;
    }
    case "track": {
      return true;
    }
    case "wbr": {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5Props3new(attrs, props, styles, handlers) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom5Props(handlers, attrs, props, styles);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src) {
  const _bind$3 = [];
  const dst = _M0MPB3Map3MapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGssE(src) {
  const _bind$3 = [];
  const dst = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGssE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(src) {
  const _bind$3 = [];
  const dst = _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5Props4copy(self) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom5Props(_M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGssE(self.attrs), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom9copy__mapGssE(self.styles));
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE();
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGsE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGsE();
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(value) {
  switch (value.$tag) {
    case 3: {
      const _String = value;
      const _value = _String._0;
      return _value;
    }
    case 2: {
      const _Floating = value;
      const _value$2 = _Floating._0;
      return _value$2;
    }
    case 1: {
      const _Integer = value;
      const _value$3 = _Integer._0;
      return _value$3;
    }
    default: {
      const _Boolean = value;
      const _value$4 = _Boolean._0;
      return _value$4;
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(element, tag, props, scheduler, captured_link_listener) {
  const _handlers = props.handlers;
  const _attrs = props.attrs;
  const _properties = props.props;
  const _styles = props.styles;
  const _bind$3 = [];
  const slots = _M0MPB3Map3MapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(new _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_handlers);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _event = _x._0;
      const _handler = _x._1;
      const slot = _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(_handler);
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, _event, (event) => {
        const _func = slot.val;
        _func(event, scheduler);
      });
      _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, _event, slot);
      continue;
    }
  }
  if (tag === "RABBITA_CAPTURED_LINK") {
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, "click", captured_link_listener);
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_attrs);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$2);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, _name, _value);
      continue;
    }
  }
  const _it$3 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_properties);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$3);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, _name, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(_value));
      continue;
    }
  }
  const _bind$4 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
  let sheet;
  if (_bind$4.$tag === 1) {
    const _Some = _bind$4;
    const _html = _Some._0;
    sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_html);
  } else {
    const _bind$5 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
    if (_bind$5.$tag === 1) {
      const _Some = _bind$5;
      const _svg = _Some._0;
      sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(_svg);
    } else {
      sheet = $panic();
    }
  }
  const _it$4 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_styles);
  while (true) {
    const _bind$5 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$4);
    if (_bind$5 === undefined) {
      break;
    } else {
      const _Some = _bind$5;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(sheet, _name, _value);
      continue;
    }
  }
  return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom6IProps(props, slots);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom37reapply__child__sensitive__properties(element, tag, props) {
  if (tag === "select") {
    const _bind$3 = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(props.props, "value");
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _value = _Some;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, "value", _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(_value));
      return;
    }
  } else {
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(self, scheduler, captured_link_listener, parent, before) {
  switch (self.$tag) {
    case 1: {
      const _Text = self;
      const _text = _Text._0;
      const element = _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), _text);
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Text(_text, element);
    }
    case 3: {
      const _Thunk = self;
      const _hash = _Thunk._0;
      const _render = _Thunk._1;
      const node = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_render(), scheduler, captured_link_listener, parent, before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode5Thunk(_hash, node);
    }
    case 2: {
      const _Frag = self;
      const _children = _Frag._0;
      const document = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
      const fragment = _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment(document);
      const start = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(document, "[");
      const end = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(document, "]");
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(start));
      const _p = new Array(_children.length);
      const _p$2 = _children.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$3 = _tmp$2;
        if (_p$3 < _p$2) {
          const _p$4 = _children[_p$3];
          _p[_p$3] = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_p$4, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
          _tmp$2 = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const children = _p;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(end));
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Frag(children, start, end);
    }
    default: {
      const _Elem = self;
      const _tag = _Elem._0;
      const _props = _Elem._1;
      const _children$2 = _Elem._2;
      const _namespace_uri = _Elem._3;
      const rendered_tag = _tag === "RABBITA_CAPTURED_LINK" ? "a" : _tag;
      const document$2 = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
      let element$2;
      if (_namespace_uri === undefined) {
        element$2 = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element(document$2, rendered_tag);
      } else {
        const _Some = _namespace_uri;
        const _namespace_uri$2 = _Some;
        element$2 = _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(document$2, _namespace_uri$2, rendered_tag, undefined, undefined);
      }
      const props = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(element$2, _tag, _props, scheduler, captured_link_listener);
      const node$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element$2);
      const children$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom23is__html__void__element(_tag) ? new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array([]) : _M0FP419moonbit_2dcommunity7rabbita8internal4vdom16insert__children(node$2, _children$2, scheduler, captured_link_listener);
      _M0FP419moonbit_2dcommunity7rabbita8internal4vdom37reapply__child__sensitive__properties(element$2, _tag, props.props);
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, node$2, before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem(_tag, props, children$2, _namespace_uri, element$2);
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom16insert__children(node, children, scheduler, captured_link_listener) {
  switch (children.$tag) {
    case 2: {
      const _RawHtml = children;
      const _html = _RawHtml._0;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(node)), _html);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(_html);
    }
    case 0: {
      const _Array = children;
      const _children = _Array._0;
      const _p = new Array(_children.length);
      const _p$2 = _children.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$3 = _tmp$2;
        if (_p$3 < _p$2) {
          const _p$4 = _children[_p$3];
          _p[_p$3] = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_p$4, scheduler, captured_link_listener, node, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
          _tmp$2 = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(_p);
    }
    default: {
      const _Map = children;
      const _children$2 = _Map._0;
      const _bind$3 = [];
      const mounted = _M0MPB3Map3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeEE(_bind$3, 0, 0), undefined);
      const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_children$2);
      while (true) {
        const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
        if (_bind$4 === undefined) {
          break;
        } else {
          const _Some = _bind$4;
          const _x = _Some;
          const _key = _x._0;
          const _child = _x._1;
          _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(mounted, _key, _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_child, scheduler, captured_link_listener, node, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
          continue;
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map(mounted);
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGsE(value) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(value);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(value));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode5start(self) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    let element;
    _L$2: {
      switch (self$2.$tag) {
        case 0: {
          const _Elem = self$2;
          const _element = _Elem._4;
          element = _element;
          break _L$2;
        }
        case 1: {
          const _Text = self$2;
          const _element$2 = _Text._1;
          element = _element$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = self$2;
          const _node = _Thunk._1;
          _tmp$2 = _node;
          continue _L;
        }
        default: {
          const _Frag = self$2;
          const _start = _Frag._1;
          return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_start);
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode3end(self) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    let element;
    _L$2: {
      switch (self$2.$tag) {
        case 0: {
          const _Elem = self$2;
          const _element = _Elem._4;
          element = _element;
          break _L$2;
        }
        case 1: {
          const _Text = self$2;
          const _element$2 = _Text._1;
          element = _element$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = self$2;
          const _node = _Thunk._1;
          _tmp$2 = _node;
          continue _L;
        }
        default: {
          const _Frag = self$2;
          const _end = _Frag._2;
          return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end);
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode17needs__relocation(self, anchor) {
  const _bind$3 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode3end(self)));
  const _bind$4 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(anchor);
  if (_bind$3.$tag === 0) {
    if (_bind$4.$tag === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    const _Some = _bind$3;
    const _actual = _Some._0;
    if (_bind$4.$tag === 1) {
      const _Some$2 = _bind$4;
      const _expected = _Some$2._0;
      return !_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_actual, _expected);
    } else {
      return true;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(self, parent) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    let element;
    _L$2: {
      switch (self$2.$tag) {
        case 0: {
          const _Elem = self$2;
          const _element = _Elem._4;
          element = _element;
          break _L$2;
        }
        case 1: {
          const _Text = self$2;
          const _element$2 = _Text._1;
          element = _element$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = self$2;
          const _node = _Thunk._1;
          _tmp$2 = _node;
          continue _L;
        }
        default: {
          const _Frag = self$2;
          const _start = _Frag._1;
          const _end = _Frag._2;
          const start = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_start);
          const end = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end);
          while (true) {
            const _bind$3 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(start));
            if (_bind$3.$tag === 1) {
              const _Some = _bind$3;
              const _node$2 = _Some._0;
              if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_node$2, end)) {
                _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _node$2);
                continue;
              } else {
                break;
              }
            } else {
              break;
            }
          }
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, start);
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, end);
          return;
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element));
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode8relocate(self, parent, before) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    if (_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode17needs__relocation(self$2, before)) {
      let element;
      _L$2: {
        switch (self$2.$tag) {
          case 0: {
            const _Elem = self$2;
            const _element = _Elem._4;
            element = _element;
            break _L$2;
          }
          case 1: {
            const _Text = self$2;
            const _element$2 = _Text._1;
            element = _element$2;
            break _L$2;
          }
          case 3: {
            const _Thunk = self$2;
            const _node = _Thunk._1;
            _tmp$2 = _node;
            continue _L;
          }
          default: {
            const _Frag = self$2;
            const _start = _Frag._1;
            const _end = _Frag._2;
            const _bind$3 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_start));
            if (_bind$3.$tag === 1) {
              const _Some = _bind$3;
              const _a = _Some._0;
              const _bind$4 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end));
              if (_bind$4.$tag === 1) {
                const _Some$2 = _bind$4;
                const _b = _Some$2._0;
                if (_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_a, _b)) {
                } else {
                  $panic();
                }
              } else {
                $panic();
              }
            } else {
              $panic();
            }
            const start = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_start);
            const end = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end);
            let anchor = before;
            while (true) {
              const _bind$4 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(end));
              if (_bind$4.$tag === 1) {
                const _Some = _bind$4;
                const _node$2 = _Some._0;
                if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_node$2, start)) {
                  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _node$2, anchor);
                  anchor = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_node$2);
                  continue;
                } else {
                  break;
                }
              } else {
                break;
              }
            }
            _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, start, anchor);
            _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, end, before);
            return;
          }
        }
      }
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), before);
      return;
    } else {
      return;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom8Children3mapGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(self, f) {
  switch (self.$tag) {
    case 0: {
      const _Array = self;
      const _children = _Array._0;
      const _p = new Array(_children.length);
      const _p$2 = _children.length;
      let _tmp$2 = 0;
      while (true) {
        const _p$3 = _tmp$2;
        if (_p$3 < _p$2) {
          const _p$4 = _children[_p$3];
          _p[_p$3] = f(_p$4);
          _tmp$2 = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(_p);
    }
    case 1: {
      const _Map = self;
      const _children$2 = _Map._0;
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map(_M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_children$2, (_discard_, child) => f(child)));
    }
    default: {
      const _RawHtml = self;
      const _html = _RawHtml._0;
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(_html);
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(old, new_, scheduler, parent) {
  const slots = old.slots;
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(slots);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _event = _x._0;
      const _slot = _x._1;
      if (!_M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.handlers, _event)) {
        _slot.val = (_discard_, _discard_$2) => {
        };
      }
      continue;
    }
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.handlers);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$2);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _event = _x._0;
      const _handler = _x._1;
      const _bind$4 = _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, _event);
      if (_bind$4 === undefined) {
        const slot = _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostE(_handler);
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _event, (event) => {
          const _func = slot.val;
          _func(event, scheduler);
        });
        _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, _event, slot);
      } else {
        const _Some$2 = _bind$4;
        const _slot = _Some$2;
        _slot.val = _handler;
      }
      continue;
    }
  }
  const _it$3 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old.props.attrs);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$3);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x._0;
      if (!_M0MPB3Map8containsGssE(new_.attrs, _key)) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key);
      }
      continue;
    }
  }
  const _it$4 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.attrs);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$4);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x._0;
      const _value2 = _x._1;
      const _bind$4 = _M0MPB3Map3getGssE(old.props.attrs, _key);
      if (_bind$4 === undefined) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, _value2);
      } else {
        const _Some$2 = _bind$4;
        const _value1 = _Some$2;
        if (!(_value1 === _value2)) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, _value2);
        }
      }
      continue;
    }
  }
  const _it$5 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old.props.props);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$5);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x._0;
      const _value = _x._1;
      if (!_M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new_.props, _key)) {
        let reset;
        if (_value.$tag === 3) {
          reset = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGsE("");
        } else {
          reset = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGsE();
        }
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, reset);
      }
      continue;
    }
  }
  const _it$6 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.props);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$6);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _key = _x._0;
      const _value2 = _x._1;
      const _bind$4 = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(old.props.props, _key);
      if (_bind$4 === undefined) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(_value2));
      } else {
        const _Some$2 = _bind$4;
        const _value1 = _Some$2;
        if (_M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(_value1, _value2)) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _key, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom22variant__to__js__value(_value2));
        }
      }
      continue;
    }
  }
  const _bind$3 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
  let stylesheet;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _html = _Some._0;
    stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_html);
  } else {
    const _bind$4 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      const _svg = _Some._0;
      stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(_svg);
    } else {
      stylesheet = $panic();
    }
  }
  const _it$7 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old.props.styles);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$7);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      if (!_M0MPB3Map8containsGssE(new_.styles, _key)) {
        _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property(stylesheet, _key);
      }
      continue;
    }
  }
  const _it$8 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.styles);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$8);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      const _value2 = _x._1;
      const _bind$5 = _M0MPB3Map3getGssE(old.props.styles, _key);
      if (_bind$5 === undefined) {
        _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, _key, _value2);
      } else {
        const _Some$2 = _bind$5;
        const _value1 = _Some$2;
        if (!(_value1 === _value2)) {
          _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, _key, _value2);
        }
      }
      continue;
    }
  }
  return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom6IProps(new_, slots);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(old, new_, scheduler, captured_link_listener, parent, anchor) {
  _L: {
    let new$2;
    _L$2: {
      switch (old.$tag) {
        case 0: {
          const _Array = old;
          const _old = _Array._0;
          switch (new_.$tag) {
            case 0: {
              const _Array$2 = new_;
              const _new = _Array$2._0;
              const old_length = _old.length;
              const new_length = _new.length;
              let before = anchor;
              const acc = [];
              let length;
              if (old_length > new_length) {
                let _tmp$2 = old_length - 1 | 0;
                while (true) {
                  const index = _tmp$2;
                  if (index >= new_length) {
                    _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(_M0MPC15array5Array2atGsE(_old, index), parent);
                    _tmp$2 = index - 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                length = new_length;
              } else {
                let _tmp$2 = new_length - 1 | 0;
                while (true) {
                  const index = _tmp$2;
                  if (index >= old_length) {
                    const node = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_M0MPC15array5Array2atGsE(_new, index), scheduler, captured_link_listener, parent, before);
                    _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(acc, node);
                    before = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode5start(node));
                    _tmp$2 = index - 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
                length = old_length;
              }
              let _tmp$2 = length - 1 | 0;
              while (true) {
                const index = _tmp$2;
                if (index >= 0) {
                  const node = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(_M0MPC15array5Array2atGsE(_old, index), _M0MPC15array5Array2atGsE(_new, index), scheduler, captured_link_listener, parent, before);
                  _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(acc, node);
                  before = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode5start(node));
                  _tmp$2 = index - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(_M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(acc));
            }
            case 2: {
              const _RawHtml = new_;
              const _new$2 = _RawHtml._0;
              new$2 = _new$2;
              break _L$2;
            }
            default: {
              break _L;
            }
          }
        }
        case 1: {
          const _Map = old;
          const _old$2 = _Map._0;
          switch (new_.$tag) {
            case 1: {
              const _Map$2 = new_;
              const _new$3 = _Map$2._0;
              const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_old$2);
              while (true) {
                const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
                if (_bind$3 === undefined) {
                  break;
                } else {
                  const _Some = _bind$3;
                  const _x = _Some;
                  const _key = _x._0;
                  const _node = _x._1;
                  if (!_M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_new$3, _key)) {
                    _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(_node, parent);
                  }
                  continue;
                }
              }
              const order = _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_new$3);
              let before$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE();
              const reversed = [];
              const _bind$3 = order.length;
              let _tmp$3 = _bind$3 - 1 | 0;
              while (true) {
                const index = _tmp$3;
                if (index >= 0) {
                  const _bind$4 = _M0MPC15array5Array2atGsE(order, index);
                  const _key = _bind$4._0;
                  const _vnode = _bind$4._1;
                  const _bind$5 = _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(_old$2, _key);
                  let node;
                  if (_bind$5 === undefined) {
                    node = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(_vnode, scheduler, captured_link_listener, parent, before$2);
                  } else {
                    const _Some = _bind$5;
                    const _node = _Some;
                    const node$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(_node, _vnode, scheduler, captured_link_listener, parent, before$2);
                    _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode8relocate(node$2, parent, before$2);
                    node = node$2;
                  }
                  _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(reversed, { _0: _key, _1: node });
                  before$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode5start(node));
                  _tmp$3 = index - 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE3Map(_M0MPB3Map3MapGsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeEE(reversed, 0, reversed.length), undefined));
            }
            case 2: {
              const _RawHtml$2 = new_;
              const _new$4 = _RawHtml$2._0;
              new$2 = _new$4;
              break _L$2;
            }
            default: {
              break _L;
            }
          }
        }
        default: {
          const _RawHtml$3 = old;
          const _old$3 = _RawHtml$3._0;
          if (new_.$tag === 2) {
            const _RawHtml$4 = new_;
            const _new$5 = _RawHtml$4._0;
            if (!(_old$3 === _new$5)) {
              _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent)), _new$5);
            }
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(_new$5);
          } else {
            break _L;
          }
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent)), new$2);
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE7RawHtml(new$2);
  }
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent)), "");
  return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom8Children3mapGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE(new_, (child) => _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(child, scheduler, captured_link_listener, parent, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(old, new_, scheduler, captured_link_listener, parent, anchor) {
  _L: {
    switch (old.$tag) {
      case 0: {
        const _Elem = old;
        const _tag1 = _Elem._0;
        const _props1 = _Elem._1;
        const _children1 = _Elem._2;
        const _ns1 = _Elem._3;
        const _element = _Elem._4;
        if (new_.$tag === 0) {
          const _Elem$2 = new_;
          const _tag2 = _Elem$2._0;
          const _props2 = _Elem$2._1;
          const _children2 = _Elem$2._2;
          const _ns2 = _Elem$2._3;
          if (!(_tag1 === _tag2) || _M0IP016_24default__implPB2Eq10not__equalGOsE(_ns1, _ns2)) {
            _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(old, parent);
            return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(new_, scheduler, captured_link_listener, parent, anchor);
          } else {
            const props = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(_props1, _props2, scheduler, _element);
            const children = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(_children1, _children2, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_element), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
            _M0FP419moonbit_2dcommunity7rabbita8internal4vdom37reapply__child__sensitive__properties(_element, _tag2, props.props);
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem(_tag2, props, children, _ns2, _element);
          }
        } else {
          break _L;
        }
      }
      case 1: {
        const _Text = old;
        const _text1 = _Text._0;
        const _element$2 = _Text._1;
        if (new_.$tag === 1) {
          const _Text$2 = new_;
          const _text2 = _Text$2._0;
          if (!(_text1 === _text2)) {
            _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_element$2, _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(_text2));
          }
          return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Text(_text2, _element$2);
        } else {
          break _L;
        }
      }
      case 2: {
        const _Frag = old;
        const _children1$2 = _Frag._0;
        const _start = _Frag._1;
        const _end = _Frag._2;
        if (new_.$tag === 2) {
          const _Frag$2 = new_;
          const _children2 = _Frag$2._0;
          const children = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array(_children1$2), new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array(_children2), scheduler, captured_link_listener, parent, _M0FP419moonbit_2dcommunity7rabbita8internal4vdom8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_end)));
          if (children.$tag === 0) {
            const _Array = children;
            const _children = _Array._0;
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Frag(_children, _start, _end);
          } else {
            return $panic();
          }
        } else {
          break _L;
        }
      }
      default: {
        const _Thunk = old;
        const _hash1 = _Thunk._0;
        const _node = _Thunk._1;
        if (new_.$tag === 3) {
          const _Thunk$2 = new_;
          const _hash2 = _Thunk$2._0;
          const _render = _Thunk$2._1;
          if (_hash1 === _hash2) {
            return _Thunk;
          } else {
            const vnode = _render();
            const node = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(_node, vnode, scheduler, captured_link_listener, parent, anchor);
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode5Thunk(_hash2, node);
          }
        } else {
          break _L;
        }
      }
    }
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5INode6remove(old, parent);
  return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(new_, scheduler, captured_link_listener, parent, anchor);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__document(old, new_, scheduler, container, captured_link_listener) {
  _L: {
    if (container.$tag === 0) {
      if (old.$tag === 0) {
        const _Elem = old;
        const _x = _Elem._0;
        if (_x === "html") {
          const _old_props = _Elem._1;
          const _x$2 = _Elem._2;
          if (_x$2.$tag === 0) {
            const _Array = _x$2;
            const _x$3 = _Array._0;
            if (_x$3.length === 2) {
              const _x$4 = _x$3[0];
              if (_x$4.$tag === 0) {
                const _Elem$2 = _x$4;
                const _x$5 = _Elem$2._0;
                if (_x$5 === "head") {
                  const _old_head_props = _Elem$2._1;
                  const _old_head_children = _Elem$2._2;
                  const _head_element = _Elem$2._4;
                  const _x$6 = _x$3[1];
                  if (_x$6.$tag === 0) {
                    const _Elem$3 = _x$6;
                    const _x$7 = _Elem$3._0;
                    if (_x$7 === "body") {
                      const _old_body_props = _Elem$3._1;
                      const _old_body_children = _Elem$3._2;
                      const _body_element = _Elem$3._4;
                      const _html_element = _Elem._4;
                      const _x$8 = _Elem._3;
                      if (_x$8 === undefined) {
                        if (new_.$tag === 0) {
                          const _Elem$4 = new_;
                          const _x$9 = _Elem$4._0;
                          if (_x$9 === "html") {
                            const _new_props = _Elem$4._1;
                            const _x$10 = _Elem$4._2;
                            if (_x$10.$tag === 0) {
                              const _Array$2 = _x$10;
                              const _x$11 = _Array$2._0;
                              if (_x$11.length === 2) {
                                const _x$12 = _x$11[0];
                                if (_x$12.$tag === 0) {
                                  const _Elem$5 = _x$12;
                                  const _x$13 = _Elem$5._0;
                                  if (_x$13 === "head") {
                                    const _new_head_props = _Elem$5._1;
                                    const _new_head_children = _Elem$5._2;
                                    const _x$14 = _x$11[1];
                                    if (_x$14.$tag === 0) {
                                      const _Elem$6 = _x$14;
                                      const _x$15 = _Elem$6._0;
                                      if (_x$15 === "body") {
                                        const _new_body_props = _Elem$6._1;
                                        const _new_body_children = _Elem$6._2;
                                        const _x$16 = _Elem$4._3;
                                        if (_x$16 === undefined) {
                                          const props = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(_old_props, _new_props, scheduler, _html_element);
                                          const props$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(_old_head_props, _new_head_props, scheduler, _head_element);
                                          const children = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(_old_head_children, _new_head_children, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_head_element), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
                                          const head = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("head", props$2, children, undefined, _head_element);
                                          const props$3 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom11diff__props(_old_body_props, _new_body_props, scheduler, _body_element);
                                          const children$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__children(_old_body_children, _new_body_children, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_body_element), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
                                          const body = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("body", props$3, children$2, undefined, _body_element);
                                          return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("html", props, new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array([head, body]), undefined, _html_element);
                                        } else {
                                          break _L;
                                        }
                                      } else {
                                        break _L;
                                      }
                                    } else {
                                      break _L;
                                    }
                                  } else {
                                    break _L;
                                  }
                                } else {
                                  break _L;
                                }
                              } else {
                                break _L;
                              }
                            } else {
                              break _L;
                            }
                          } else {
                            break _L;
                          }
                        } else {
                          break _L;
                        }
                      } else {
                        break _L;
                      }
                    } else {
                      break _L;
                    }
                  } else {
                    break _L;
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          } else {
            break _L;
          }
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    } else {
      const _Some = container;
      const _container = _Some._0;
      return _M0FP419moonbit_2dcommunity7rabbita8internal4vdom10diff__node(old, new_, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_container), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
    }
  }
  return $panic();
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom4VDom6update(self, root, scheduler) {
  self.inode = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom14diff__document(self.inode, root, scheduler, self.target_element, self.captured_link_listener);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal4vdom29new__captured__link__listener(scheduler) {
  return (event) => {
    const _bind$3 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
    if (_bind$3.$tag === 1) {
      const _Some = _bind$3;
      const _mouse_event = _Some._0;
      if (!(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_mouse_event) || _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_mouse_event))) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
        const href = _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event)))), "href"));
        scheduler.method_table.method_0(scheduler.self, scheduler.method_table.method_6(scheduler.self, href));
        return;
      } else {
        return;
      }
    } else {
      return;
    }
  };
}
function _M0MP419moonbit_2dcommunity7rabbita8internal4vdom4VDom10initialize(vnode, scheduler, target_element_id) {
  const captured_link_listener = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom29new__captured__link__listener(scheduler);
  _L: {
    if (target_element_id === undefined) {
      switch (vnode.$tag) {
        case 0: {
          const _Elem = vnode;
          const _x = _Elem._0;
          if (_x === "html") {
            const _props = _Elem._1;
            const _x$2 = _Elem._2;
            if (_x$2.$tag === 0) {
              const _Array = _x$2;
              const _x$3 = _Array._0;
              if (_x$3.length === 2) {
                const _x$4 = _x$3[0];
                if (_x$4.$tag === 0) {
                  const _Elem$2 = _x$4;
                  const _x$5 = _Elem$2._0;
                  if (_x$5 === "head") {
                    const _head_props = _Elem$2._1;
                    const _head_children = _Elem$2._2;
                    const _x$6 = _x$3[1];
                    if (_x$6.$tag === 0) {
                      const _Elem$3 = _x$6;
                      const _x$7 = _Elem$3._0;
                      if (_x$7 === "body") {
                        const _body_props = _Elem$3._1;
                        const _body_children = _Elem$3._2;
                        const _x$8 = _Elem._3;
                        if (_x$8 === undefined) {
                          const element = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement11as__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document9get__head(_M0FP319moonbit_2dcommunity7rabbita3dom8document())));
                          const props = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(element, "head", _head_props, scheduler, captured_link_listener);
                          const children = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom16insert__children(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), _head_children, scheduler, captured_link_listener);
                          const head = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("head", props, children, undefined, element);
                          const element$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement11as__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document9get__body(_M0FP319moonbit_2dcommunity7rabbita3dom8document())));
                          const props$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(element$2, "body", _body_props, scheduler, captured_link_listener);
                          const children$2 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom16insert__children(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element$2), _body_children, scheduler, captured_link_listener);
                          const body = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("body", props$2, children$2, undefined, element$2);
                          const html = _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document22get__document__element(_M0FP319moonbit_2dcommunity7rabbita3dom8document()));
                          const props$3 = _M0FP419moonbit_2dcommunity7rabbita8internal4vdom13insert__props(html, "html", _props, scheduler, captured_link_listener);
                          const inode = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5INode4Elem("html", props$3, new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5INodeE5Array([head, body]), undefined, html);
                          const _bind$3 = _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4None__;
                          return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom4VDom(inode, _bind$3, captured_link_listener);
                        } else {
                          break _L;
                        }
                      } else {
                        break _L;
                      }
                    } else {
                      break _L;
                    }
                  } else {
                    break _L;
                  }
                } else {
                  break _L;
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          } else {
            break _L;
          }
        }
        case 1: {
          break _L;
        }
        case 2: {
          break _L;
        }
        default: {
          break _L;
        }
      }
    } else {
      const _Some = target_element_id;
      const _id = _Some;
      const container = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), _id));
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(container, "");
      const inode = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5VNode6insert(vnode, scheduler, captured_link_listener, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(container), _M0FP419moonbit_2dcommunity7rabbita8internal4vdom4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
      const _bind$3 = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom7ElementE4Some(container);
      return new _M0TP419moonbit_2dcommunity7rabbita8internal4vdom4VDom(inode, _bind$3, captured_link_listener);
    }
  }
  return $panic();
}
function _M0IP319moonbit_2dcommunity7rabbita4html4HtmlPB2Eq5equal(_x_2126, _x_2127) {
  return _x_2126 === _x_2127;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, key, value) {
  _M0MPB3Map3setGssE(self.attrs, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs) {
  if (style.length > 0) {
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "style", _M0MPC15array5Array4joinGsE(style, new _M0TPC16string10StringView(_M0FP319moonbit_2dcommunity7rabbita4html11push__styleN7_2abindS2131, 0, _M0FP319moonbit_2dcommunity7rabbita4html11push__styleN7_2abindS2131.length)));
    return;
  } else {
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html8push__id(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "id", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__class(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "class", _v);
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, key, value) {
  const _bind$3 = _M0MPB3Map3getGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key);
  if (_bind$3 === undefined) {
    _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key, value);
  } else {
    const _Some = _bind$3;
    const _previous = _Some;
    _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key, (event, scheduler) => {
      _previous(event, scheduler);
      value(event, scheduler);
    });
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "click", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__click(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(attrs, (_discard_) => _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event) {
  return _M0MP319moonbit_2dcommunity7rabbita6common5Mouse3new(new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)), new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)), new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)));
}
function _M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event) {
  return _M0MP319moonbit_2dcommunity7rabbita6common8Keyboard3new(_M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent4code(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8alt__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9ctrl__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent10shift__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9meta__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent13is__composing(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent6repeat(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8location(event));
}
function _M0FP319moonbit_2dcommunity7rabbita4html17scroll__from__dom(element) {
  return _M0MP319moonbit_2dcommunity7rabbita6common6Scroll3new(new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17get__scroll__leftGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16get__scroll__topGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element)), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement18get__scroll__widthGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement19get__scroll__heightGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mousedown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mouseup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, "scroll", (event, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0FP319moonbit_2dcommunity7rabbita4html28scroll__event__as__ui__event(event)));
  });
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(attrs, (event) => {
      const element = _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(event)));
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html17scroll__from__dom(element));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_0(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keydown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keyup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(self, key, value) {
  _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "value", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html25push__value__prop__string(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "value", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__title(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "title", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__name(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "name", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "disabled", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__rows(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "rows", _M0MPC13int3Int18to__string_2einner(_v, 10));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__cols(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "cols", _M0MPC13int3Int18to__string_2einner(_v, 10));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html17push__placeholder(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "placeholder", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__readonly(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "readOnly", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__maxlength(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "maxlength", _M0MPC13int3Int18to__string_2einner(_v, 10));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__minlength(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "minlength", _M0MPC13int3Int18to__string_2einner(_v, 10));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html18form__event__value(event) {
  const _bind$3 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event));
  let target;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    target = _Some._0;
  } else {
    target = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
  }
  const _bind$4 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget24to__html__input__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(target);
  if (_bind$4.$tag === 1) {
    const _Some = _bind$4;
    const _input = _Some._0;
    return _M0MP319moonbit_2dcommunity7rabbita3dom16HTMLInputElement5value(_input);
  } else {
    const _bind$5 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget25to__html__select__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(target);
    if (_bind$5.$tag === 1) {
      const _Some = _bind$5;
      const _select = _Some._0;
      return _M0MP319moonbit_2dcommunity7rabbita3dom17HTMLSelectElement5value(_select);
    } else {
      const _bind$6 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(target);
      if (_bind$6.$tag === 1) {
        const _Some = _bind$6;
        const _element = _Some._0;
        const _bind$7 = _M0MP319moonbit_2dcommunity7rabbita2js8Optional10to__optionGsE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_element, "value"));
        if (_bind$7 === undefined) {
          return $panic();
        } else {
          const _Some$2 = _bind$7;
          return _Some$2;
        }
      } else {
        return $panic();
      }
    }
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__change(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(attrs, "change", (event, scheduler) => {
      const _func = _v;
      scheduler.method_table.method_0(scheduler.self, _func(_M0FP319moonbit_2dcommunity7rabbita4html18form__event__value(event)));
    });
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__input(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(attrs, "input", (event, scheduler) => {
      const _func = _v;
      scheduler.method_table.method_0(scheduler.self, _func(_M0FP319moonbit_2dcommunity7rabbita4html18form__event__value(event)));
    });
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "hidden", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__type(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "type", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__required(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "required", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "autofocus", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__wrap(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "wrap", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__cite(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "cite", _v);
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build() {
  const _bind$3 = [];
  const _tmp$2 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0), undefined);
  const _bind$4 = [];
  const _tmp$3 = _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind$4, 0, 0), undefined);
  const _bind$5 = [];
  const _tmp$4 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$5, 0, 0), undefined);
  const _bind$6 = [];
  return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5Props3new(_tmp$2, _tmp$3, _tmp$4, _M0MPB3Map3MapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$6, 0, 0), undefined));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(self) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal4vdom5Props4copy(self);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(attrs, children) {
  let attrs$2;
  if (attrs === undefined) {
    attrs$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build();
  } else {
    const _Some = attrs;
    const _a = _Some;
    attrs$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(_a);
  }
  let children$2;
  _L: {
    _L$2: {
      const _bind$3 = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(attrs$2.props, "innerHTML");
      if (_bind$3 === undefined) {
        break _L$2;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (_x.$tag === 3) {
          const _String = _x;
          const _raw_html = _String._0;
          _M0MPB3Map6removeGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(attrs$2.props, "innerHTML");
          children$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE7RawHtml(_raw_html);
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    children$2 = _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children);
  }
  return { _0: attrs$2, _1: children$2 };
}
function _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children) {
  let attrs$2;
  if (attrs === undefined) {
    attrs$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build();
  } else {
    const _Some = attrs;
    const _a = _Some;
    attrs$2 = _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(_a);
  }
  let children$2;
  _L: {
    _L$2: {
      const _bind$3 = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(attrs$2.props, "innerHTML");
      if (_bind$3 === undefined) {
        break _L$2;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        if (_x.$tag === 3) {
          const _String = _x;
          const _raw_html = _String._0;
          _M0MPB3Map6removeGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(attrs$2.props, "innerHTML");
          children$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE7RawHtml(_raw_html);
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    children$2 = _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children);
  }
  return { _0: attrs$2, _1: children$2 };
}
function _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(style, id, class_, title, hidden, type_, disabled, name, value, autofocus, on_click, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__type(type_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "button";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html6buttonGsE(style$46$opt, id, class_, title, hidden, type_, disabled, name, value, autofocus, on_click, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(style, id, class_, title, hidden, type_, disabled, name, value, autofocus, on_click, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10h1_2einnerGsE(style, id, class_, title, hidden, cite, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__cite(cite, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "h1";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html2h1GsE(style$46$opt, id, class_, title, hidden, cite, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html10h1_2einnerGsE(style, id, class_, title, hidden, cite, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(on_mousedown, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(on_mouseup, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(on_scroll, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(on_keydown, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(on_keyup, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "div";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(on_mousedown, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(on_mouseup, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(on_scroll, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(on_keydown, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(on_keyup, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "div";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style$46$opt, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html3divGsE(style$46$opt, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGsE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "p";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html1pGsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "span";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html12span_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4text(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Text(str);
}
function _M0FP319moonbit_2dcommunity7rabbita4html16textarea_2einnerGsE(style, id, class_, title, hidden, name, value, rows, cols, placeholder, read_only, disabled, maxlength, minlength, required, autofocus, wrap, on_change, on_input, attrs, children) {
  const _bind$3 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrsGsE(attrs, children);
  const _attrs = _bind$3._0;
  const _children = _bind$3._1;
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__prop__string(value, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__rows(rows, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__cols(cols, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html17push__placeholder(placeholder, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__readonly(read_only, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__maxlength(maxlength, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__minlength(minlength, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__required(required, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__wrap(wrap, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__change(on_change, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__input(on_input, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, _attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, _attrs);
  const _p = "textarea";
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom5VNode4Elem(_p, _attrs, _children, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html8textareaGsE(style$46$opt, id, class_, title, hidden, name, value, rows, cols, placeholder, read_only, disabled, maxlength, minlength, required, autofocus, wrap, on_change, on_input, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html16textarea_2einnerGsE(style, id, class_, title, hidden, name, value, rows, cols, placeholder, read_only, disabled, maxlength, minlength, required, autofocus, wrap, on_change, on_input, attrs, children);
}
function _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array([_M0FP319moonbit_2dcommunity7rabbita4html4text(str)]);
}
function _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$3 = _tmp$2;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = _p$4;
      _tmp$2 = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal4vdom8ChildrenGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE5Array(_p);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB4Hash13hash__combine(_x_388, _x_389) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7slotmap2IdPB4Hash13hash__combine(_x_388, _x_389);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdPB2Eq5equal(_x_384, _x_385) {
  return _x_384.gen === _x_385.gen && _x_384.idx === _x_385.idx;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid() {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid.val + 1 | 0;
  return _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid.val;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9map__nodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(childs, compute) {
  const _bind$3 = [];
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$4, true, _bind$3);
  const _bind$5 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$6 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$7 = undefined;
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_bind$5, _bind$7, compute, 0, 0, _bind$6, childs, dirty);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map1GRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a, f) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9map__nodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE([{ self: a, method_table: _M0FP0178moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2fhtml_2fHtml_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }], () => {
    const _p = a.value;
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    return f(_tmp$2);
  });
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix10get__scope() {
  return _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11with__scopeGURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(f) {
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap14allocate__withGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, (id$2) => {
    const _tmp$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
    const _bind$3 = [];
    return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix5Scope(id$2, _tmp$2, _M0MPC13set3Set3SetGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(new _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_bind$3, 0, 0), undefined), []);
  });
  const result = _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, id, () => f(id));
  const _bind$3 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val);
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _scope = _Some;
    _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_scope.sub_scopes, id);
  }
  return result;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11on__cleanup(f) {
  _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix10get__scope().cleanups, f);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix5Scope7dispose(self) {
  const _it = _M0MPC13set3Set4iterGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(self.sub_scopes);
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _id = _Some;
      const _bind$4 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _id);
      if (_bind$4 === undefined) {
      } else {
        const _Some$2 = _bind$4;
        const _scope = _Some$2;
        _M0MP419moonbit_2dcommunity7rabbita8internal6duplix5Scope7dispose(_scope);
      }
      continue;
    }
  }
  const _bind$3 = self.cleanups;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const cleanup = _bind$3[_];
      cleanup();
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = self.parent;
  if (_bind$5 === undefined) {
  } else {
    const _Some = _bind$5;
    const _p = _Some;
    _M0MPC13set3Set6removeGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIdE(_M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _p).sub_scopes, self.id);
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4freeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, self.id);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeId7cleanup(id) {
  _M0MP419moonbit_2dcommunity7rabbita8internal6duplix5Scope7dispose(_M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, id));
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind$3 = self.value;
    if (_bind$3 === undefined) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind$3;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$4 = self.childs;
            if (_bind$4.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp$2;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _p$4 = _tmp$3;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$3 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp$2 = false;
                  break _L$3;
                }
                _tmp$2 = _p$2;
              }
              if (_tmp$2) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!_M0IP319moonbit_2dcommunity7rabbita4html4HtmlPB2Eq5equal(_old, new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind$3 = self.value;
    if (_bind$3 === undefined) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind$3;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$4 = self.childs;
            if (_bind$4.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp$2;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _p$4 = _tmp$3;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$3 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp$2 = false;
                  break _L$3;
                }
                _tmp$2 = _p$2;
              }
              if (_tmp$2) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!(_old.old_text === new_.old_text && _old.new_text === new_.new_text && _old.word_level === new_.word_level)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind$3 = self.value;
    if (_bind$3 === undefined) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind$3;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$4 = self.childs;
            if (_bind$4.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp$2;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _p$4 = _tmp$3;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$3 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp$2 = false;
                  break _L$3;
                }
                _tmp$2 = _p$2;
              }
              if (_tmp$2) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!(_old === new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeIduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind$3 = self.value;
    if (_bind$3.$tag === 0) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new _M0DTPC16option6OptionGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE4Some(new_);
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind$3;
      const _old = _Some._0;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$4 = self.childs;
            if (_bind$4.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp$2;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$3 = 0;
                  while (true) {
                    const _p$4 = _tmp$3;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$3 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp$2 = false;
                  break _L$3;
                }
                _tmp$2 = _p$2;
              }
              if (_tmp$2) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!_M0IPC16option6OptionPB2Eq5equalGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(_old, new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new _M0DTPC16option6OptionGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE4Some(new_);
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11push__dirty(node) {
  const _bind$3 = [{ _0: node.method_table.method_3(node.self), _1: false }];
  const traverses = _M0MPC15queue5Queue5QueueGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(new _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagbEE(_bind$3, 0, 1));
  while (true) {
    const _bind$4 = _M0MPC15queue5Queue3popGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(traverses);
    if (_bind$4 === undefined) {
      return;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _x$2 = _x._0;
      const _expanded = _x._1;
      if (_expanded) {
        _M0MPC15array5Array5clearGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(_x$2.parents);
      } else {
        if (!_x$2.dirty) {
          _x$2.dirty = true;
          const _bind$5 = _x$2.parents;
          const _bind$6 = _bind$5.length;
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < _bind$6) {
              const p = _bind$5[_];
              _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(traverses, { _0: p, _1: false });
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(traverses, { _0: _x$2, _1: true });
        } else {
          continue;
        }
      }
      continue;
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(x) {
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$5 = _M0DTPC16option6OptionGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE4None__;
  const _bind$6 = () => x;
  const _bind$7 = [];
  const _bind$8 = [];
  const _bind$9 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$10 = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$9, true, _bind$8);
  const node = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(_bind$3, _bind$5, _bind$6, 0, 0, _bind$4, _bind$7, _bind$10);
  const write = (x$2) => {
    node.compute = () => x$2;
    _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11push__dirty({ self: node, method_table: _M0FP0179moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bMr_2dHoujie_2fmbt_2ddiffview_2fui_2fModel_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  };
  return { _0: node, _1: write };
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, f) {
  const _bind$3 = [];
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty_b = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$4, true, _bind$3);
  const _bind$5 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$6 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$7 = undefined;
  const _bind$8 = () => {
    const _p = a.value;
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    return f(_tmp$2);
  };
  const _bind$9 = [{ self: a, method_table: _M0FP0176moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bMr_2dHoujie_2fmbt_2ddiffview_2fui_2fModel_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP319moonbit_2dcommunity7rabbita4html4HtmlE(_bind$5, _bind$7, _bind$8, 0, 0, _bind$6, _bind$9, dirty_b);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(a, f) {
  const _bind$3 = [];
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty_b = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$4, true, _bind$3);
  const _bind$5 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$6 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$7 = undefined;
  const _bind$8 = () => f(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(a.value));
  const _bind$9 = [{ self: a, method_table: _M0FP0179moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bMr_2dHoujie_2fmbt_2ddiffview_2fui_2fModel_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(_bind$5, _bind$7, _bind$8, 0, 0, _bind$6, _bind$9, dirty_b);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value(node) {
  const stack = [{ _0: node, _1: false }];
  const _bind$3 = [];
  const seen = _M0MPC13set3Set3SetGiE(new _M0TPB9ArrayViewGiE(_bind$3, 0, 0), undefined);
  const recomputes = [];
  while (true) {
    const _bind$4 = _M0MPC15array5Array3popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(stack);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _x$2 = _x._0;
      const _expanded = _x._1;
      if (_x$2.method_table.method_3(_x$2.self).dirty) {
        const id = _x$2.method_table.method_0(_x$2.self);
        if (_expanded) {
          _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(recomputes, _x$2);
        } else {
          if (!_M0MPC13set3Set8containsGiE(seen, id)) {
            _M0MPC13set3Set3addGiE(seen, id);
            _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(stack, { _0: _x$2, _1: true });
            const _bind$5 = _x$2.method_table.method_1(_x$2.self);
            const _bind$6 = _bind$5.length;
            let _tmp$2 = 0;
            while (true) {
              const _ = _tmp$2;
              if (_ < _bind$6) {
                const child = _bind$5[_];
                if (child.method_table.method_3(child.self).dirty) {
                  _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(stack, { _0: child, _1: false });
                }
                _tmp$2 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
        }
      } else {
        continue;
      }
      continue;
    }
  }
  const _bind$4 = recomputes.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const node$2 = recomputes[_];
      const _bind$5 = node$2.method_table.method_1(node$2.self);
      const _bind$6 = _bind$5.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$6) {
          const child = _bind$5[_$2];
          const _p = child.method_table.method_3(child.self).parents;
          let _tmp$4;
          let _p$2;
          _L: {
            _L$2: {
              const _p$3 = _p.length;
              let _tmp$5 = 0;
              while (true) {
                const _p$4 = _tmp$5;
                if (_p$4 < _p$3) {
                  const _p$5 = _p[_p$4];
                  if (!(_p$5.id !== node$2.method_table.method_3(node$2.self).id)) {
                    _p$2 = false;
                    break _L$2;
                  }
                  _tmp$5 = _p$4 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _tmp$4 = true;
              break _L;
            }
            _tmp$4 = _p$2;
          }
          if (_tmp$4) {
            _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(child.method_table.method_3(child.self).parents, node$2.method_table.method_3(node$2.self));
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      node$2.method_table.method_4(node$2.self);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value({ self: a, method_table: _M0FP0190moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2finternal_2fvdom_2fVNode_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  const _p = a.value;
  if (_p === undefined) {
    return $panic();
  } else {
    const _p$2 = _p;
    return _p$2;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value({ self: a, method_table: _M0FP0179moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bMr_2dHoujie_2fmbt_2ddiffview_2fui_2fModel_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  return _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(a.value);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val + 1;
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val + 1;
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(a);
}
function _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(self, _discard_, filter_global) {
  const _bind$3 = [];
  const map = _M0MPB3Map3MapGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new _M0TPB9ArrayViewGUsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(_bind$3, 0, 0), undefined);
  const go = (s) => {
    let h;
    let k;
    let v;
    _L: {
      if (s.$tag === 0) {
        const _Custom = s;
        const _x = _Custom._0;
        const _x$2 = _Custom._1;
        if (_x$2 === 1) {
          const _x$3 = _Custom._2;
          const _x$4 = _Custom._3;
          if (filter_global) {
            return;
          } else {
            h = _x$3;
            k = _x;
            v = _x$4;
            break _L;
          }
        } else {
          const _h = _Custom._2;
          const _v = _Custom._3;
          h = _h;
          k = _x;
          v = _v;
          break _L;
        }
      } else {
        const _Batch = s;
        const _xs = _Batch._0;
        const _p = _xs.length;
        let _tmp$2 = 0;
        while (true) {
          const _p$2 = _tmp$2;
          if (_p$2 < _p) {
            const _p$3 = _xs[_p$2];
            go(_p$3);
            _tmp$2 = _p$2 + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
    }
    _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(map, k, { _0: h, _1: v });
  };
  go(self);
  return map;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__subs(old_subs, new_subs, scheduler) {
  const _bind$3 = [];
  const sub_map = _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind$3, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old_subs);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      const _sub = _x._1;
      const _bind$5 = _M0MPB3Map3getGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new_subs, _key);
      if (_bind$5 === undefined) {
        const _func = _sub.unload;
        _func(scheduler);
      } else {
        const _Some$2 = _bind$5;
        const _x$2 = _Some$2;
        const _new_payload = _x$2._0;
        const _func = _sub.update_tagger;
        _func(_new_payload);
        _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(sub_map, _key, _sub);
      }
      continue;
    }
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_subs);
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$2);
    if (_bind$4 === undefined) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _key = _x._0;
      const _sub = _x._1;
      const _payload = _sub._0;
      const _loader = _sub._1;
      if (!_M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(old_subs, _key)) {
        const _func = _loader;
        const _bind$5 = _func(_payload, scheduler);
        if (_bind$5 === undefined) {
        } else {
          const _Some$2 = _bind$5;
          const _running = _Some$2;
          _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(sub_map, _key, _running);
        }
      }
      continue;
    }
  }
  return sub_map;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14cleanup__store(stores, id, sub_map, scheduler) {
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4freeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(stores, id);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(sub_map);
  while (true) {
    const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _sub = _x._1;
      const _func = _sub.unload;
      _func(scheduler);
      continue;
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineN12handle__subsS140GRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(_env, scheduler, model) {
  const subscriptions = _env._2;
  const emit = _env._1;
  const sub_map = _env._0;
  if (subscriptions === undefined) {
    return;
  } else {
    const _Some = subscriptions;
    const _subscriptions = _Some;
    const new_subs = _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(_subscriptions(model, emit), _M0FP419moonbit_2dcommunity7rabbita8internal3key3key, false);
    sub_map.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__subs(sub_map.val, new_subs, scheduler);
    return;
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(initialize, update, subscriptions) {
  const host = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host.val;
  const stores = host.method_table.method_2(host.self);
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(stores);
  const emit = (msg) => {
    const _p = new _M0DTP319moonbit_2dcommunity7rabbita3cmd9Extension110moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2emoonbit_2dcommunity_2frabbita_2fcmd_2eExtension_2eMessage(id, _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(msg));
    return new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Invoke(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime2op, _p);
  };
  const _bind$3 = [];
  const sub_map = new _M0TPB8MutLocalGRPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind$3, 0, 0), undefined));
  const _env = { _0: sub_map, _1: emit, _2: subscriptions };
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(undefined);
  const _model = _bind$4._0;
  const _set_model = _bind$4._1;
  const _bind$5 = initialize(emit);
  const _model_value = _bind$5._0;
  const _init_cmd = _bind$5._1;
  _set_model(_model_value);
  const on_update = (scheduler, msg) => {
    const msg$2 = msg.value;
    const old_model = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(_model);
    let _tmp$2;
    if (old_model === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p = old_model;
      _tmp$2 = _p;
    }
    const _bind$6 = update(_tmp$2, msg$2, emit);
    const _new_model = _bind$6._0;
    const _cmd = _bind$6._1;
    _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineN12handle__subsS140GRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(_env, scheduler, _new_model);
    _set_model(_new_model);
    return _cmd;
  };
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(stores, id, new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Store(on_update));
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11on__cleanup(() => {
    _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14cleanup__store(stores, id, sub_map.val, { self: host, method_table: _M0FP0115moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
  });
  host.method_table.method_3(host.self, _init_cmd);
  const _tmp$2 = { self: host, method_table: _M0FP0115moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler };
  const _p = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(_model);
  let _tmp$3;
  if (_p === undefined) {
    _tmp$3 = $panic();
  } else {
    const _p$2 = _p;
    _tmp$3 = _p$2;
  }
  _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineN12handle__subsS140GRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(_env, _tmp$2, _tmp$3);
  return { _0: _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGORP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(_model, (x) => {
    if (x === undefined) {
      return $panic();
    } else {
      const _p$2 = x;
      return _p$2;
    }
  }), _1: emit };
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime15handle__message(host, extension) {
  if (extension.$tag === 3) {
    const _Message = extension;
    const _id = _Message._0;
    const _erased_msg = _Message._1;
    const _bind$3 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(host.method_table.method_2(host.self), _id);
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _store = _Some;
      const _func = _store.on_update;
      const cmd = _func({ self: host, method_table: _M0FP0115moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler }, _erased_msg);
      host.method_table.method_4(host.self, cmd);
    }
    return true;
  } else {
    return false;
  }
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host11get__stores(self) {
  return self.stores;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context14get__base__uri(_self) {
  return "";
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed(_self, _url) {
  return _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request(_self, _url) {
  return _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(_self, _cmd) {}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector(_self, _injector) {}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector(_self, _injector) {}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush(_self) {}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime9DummyHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host7cleanup(_self) {}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost11BrowserHost(element_id, builder) {
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11with__scopeGURP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEEE((scope) => {
    const _bind$4 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE();
    const _bind$5 = [];
    const _bind$6 = _M0MPC15queue5Queue5QueueGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(new _M0TPB9ArrayViewGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(_bind$5, 0, 0));
    const _bind$7 = undefined;
    const _bind$8 = undefined;
    const _bind$9 = (_discard_) => _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
    const _bind$10 = (_discard_) => _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
    const _bind$11 = [];
    const _bind$12 = _M0MPC15queue5Queue5QueueGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(new _M0TPB9ArrayViewGWERP319moonbit_2dcommunity7rabbita3cmd3CmdE(_bind$11, 0, 0));
    const host = new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost(_bind$12, _bind$6, _bind$4, scope, _bind$7, true, false, _bind$8, _bind$9, _bind$10);
    return { _0: host, _1: _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeEE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host, { self: host, method_table: _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost }, builder) };
  });
  const _host = _bind$3._0;
  const _output = _bind$3._1;
  _host.graph_output = _output;
  const url = _M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url(_M0FP319moonbit_2dcommunity7rabbita3dom6window());
  const cmd = _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed(_host, url);
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(_host, cmd);
  const root = _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host, { self: _host, method_table: _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost }, () => _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_output));
  _host.document = _M0MP419moonbit_2dcommunity7rabbita8internal4vdom4VDom10initialize(root, { self: _host, method_table: _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler }, element_id);
  _host.drain_scheduled = false;
  return _host;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost14request__frame(self) {
  if (!self.paint_scheduled) {
    self.paint_scheduled = true;
    _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame(_M0FP319moonbit_2dcommunity7rabbita3dom6window(), (_discard_) => {
      const _bind$3 = self.document;
      if (_bind$3 === undefined) {
      } else {
        const _Some = _bind$3;
        const _document = _Some;
        const _p = self.graph_output;
        let output;
        if (_p === undefined) {
          output = $panic();
        } else {
          const _p$2 = _p;
          output = _p$2;
        }
        const vnode = _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7runtime4HostRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime13ambient__host, { self: self, method_table: _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost }, () => _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(output));
        _M0MP419moonbit_2dcommunity7rabbita8internal4vdom4VDom6update(_document, vnode, { self: self, method_table: _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
      }
      self.paint_scheduled = false;
      while (true) {
        const _bind$4 = _M0MPC15queue5Queue3popGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.after_render_queue);
        if (_bind$4 === undefined) {
          return;
        } else {
          const _Some = _bind$4;
          const _f = _Some;
          const cmd = _f();
          _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, cmd);
          continue;
        }
      }
    });
    return;
  } else {
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__taskN16_2aasync__driverS456(_state) {
  const _State_0 = _state;
  const self = _State_0._1;
  const _cont_param = _State_0._0;
  return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(_M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, _cont_param));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__task(self) {
  if (!self.drain_scheduled) {
    self.drain_scheduled = true;
    _M0MP319moonbit_2dcommunity7rabbita3dom6Window16queue__microtask(_M0FP319moonbit_2dcommunity7rabbita3dom6window(), () => {
      while (true) {
        const _bind$3 = _M0MPC15queue5Queue3popGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.task_queue);
        if (_bind$3 === undefined) {
          break;
        } else {
          const _Some = _bind$3;
          const _x = _Some;
          const _op = _x._0;
          const _extension = _x._1;
          if (_M0FP419moonbit_2dcommunity7rabbita8internal7runtime15handle__message({ self: self, method_table: _M0FP0132moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eHost }, _extension)) {
            continue;
          }
          let _try_err;
          _L: {
            _L$2: {
              const _bind$4 = _M0FP319moonbit_2dcommunity7rabbita3cmd6invoke(_M0FP419moonbit_2dcommunity7rabbita8internal3key3key, _op, _extension, { self: self, method_table: _M0FP0120moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eContext });
              let _bind$5;
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _bind$5 = _ok._0;
              } else {
                const _err = _bind$4;
                _try_err = _err._0;
                break _L$2;
              }
              switch (_bind$5.$tag) {
                case 0: {
                  break;
                }
                case 1: {
                  const _Ready = _bind$5;
                  const _cmd = _Ready._0;
                  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, _cmd);
                  break;
                }
                case 2: {
                  const _Async = _bind$5;
                  const _f = _Async._0;
                  _M0MP311moonbitlang5async9js__async7Promise11from__asyncGuE((_cont, _err_cont) => {
                    const _bind$6 = _f((_cont_param) => {
                      let _err;
                      _L$3: {
                        const _bind$7 = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__taskN16_2aasync__driverS456(new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime125_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eBrowserHost_3a_3arequest__task_2elambda_2e_2atry_2f403_2elambda_2f453L5State8State__0(_cont_param, self));
                        let _bind$8;
                        if (_bind$7.$tag === 1) {
                          const _ok = _bind$7;
                          _bind$8 = _ok._0;
                        } else {
                          const _err$2 = _bind$7;
                          _err = _err$2._0;
                          break _L$3;
                        }
                        if (_bind$8 === -1) {
                          return;
                        } else {
                          const _Some$2 = _bind$8;
                          const _payload = _Some$2;
                          _cont(_payload);
                          return;
                        }
                      }
                      _err_cont(_err);
                    }, _err_cont);
                    let _bind$7;
                    if (_bind$6.$tag === 1) {
                      const _ok = _bind$6;
                      _bind$7 = _ok._0;
                    } else {
                      return _bind$6;
                    }
                    if (_bind$7 === undefined) {
                      return new _M0DTPC16result6ResultGOuRPC15error5ErrorE2Ok(-1);
                    } else {
                      const _Some$2 = _bind$7;
                      const _payload = _Some$2;
                      return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__taskN16_2aasync__driverS456(new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime125_40moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2eBrowserHost_3a_3arequest__task_2elambda_2e_2atry_2f403_2elambda_2f453L5State8State__0(_payload, self));
                    }
                  }, _M0DTPC16option6OptionGRP311moonbitlang5async9js__async11AbortSignalE4None__);
                  break;
                }
                case 3: {
                  const _AfterLayout = _bind$5;
                  const _f$2 = _AfterLayout._0;
                  _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.after_render_queue, _f$2);
                  break;
                }
                default: {
                  const _LegacyEffect = _bind$5;
                  const _x$2 = _LegacyEffect._0;
                  if (_x$2 === 0) {
                    const _f$3 = _LegacyEffect._1;
                    _f$3({ self: self, method_table: _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
                  } else {
                    const _f$3 = _LegacyEffect._1;
                    _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.after_render_queue, () => {
                      _f$3({ self: self, method_table: _M0FP0122moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fBrowserHost_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
                      return _M0FP319moonbit_2dcommunity7rabbita3cmd4none;
                    });
                  }
                }
              }
              break _L;
            }
          }
          continue;
        }
      }
      self.drain_scheduled = false;
      _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost14request__frame(self);
    });
    return;
  } else {
    return;
  }
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush(self) {
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__task(self);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host11get__stores(self) {
  return self.stores;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host7cleanup(self) {
  _M0MP419moonbit_2dcommunity7rabbita8internal6duplix7ScopeId7cleanup(self.scope);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__command(self, cmd) {
  const tasks = _M0FP319moonbit_2dcommunity7rabbita3cmd7flatten(_M0FP419moonbit_2dcommunity7rabbita8internal3key3key, cmd);
  const _bind$3 = tasks.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const task = tasks[_];
      _M0MPC15queue5Queue4pushGURP319moonbit_2dcommunity7rabbita3cmd2OpRP319moonbit_2dcommunity7rabbita3cmd9ExtensionEE(self.task_queue, task);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost13request__task(self);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__changed__injector(self, injector) {
  self.url_changed = injector;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd9Scheduler27set__url__request__injector(self, injector) {
  self.url_request = injector;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context14get__base__uri(_self) {
  return _M0MP319moonbit_2dcommunity7rabbita3dom8Document9base__uri(_M0FP319moonbit_2dcommunity7rabbita3dom8document());
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__changed(self, url) {
  const _func = self.url_changed;
  return _func(url);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP319moonbit_2dcommunity7rabbita3cmd7Context20inject__url__request(self, url) {
  const _func = self.url_request;
  return _func(url);
}
function _M0FP219moonbit_2dcommunity7rabbita3new(builder) {
  return new _M0TP219moonbit_2dcommunity7rabbita3App(builder);
}
function _M0MP219moonbit_2dcommunity7rabbita3Val3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a, f) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map1GRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(a, f);
}
function _M0MP219moonbit_2dcommunity7rabbita3App5mount(self, element_id) {
  const host = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHost11BrowserHost(element_id, () => {
    const _func = self.builder;
    const output = _func();
    return _M0MP219moonbit_2dcommunity7rabbita3Val3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal4vdom5VNodeE(output, (html) => html);
  });
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime11BrowserHostP419moonbit_2dcommunity7rabbita8internal7runtime4Host5flush(host);
}
function _M0MP219moonbit_2dcommunity7rabbita3Val4viewGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(a, render) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, render);
}
function _M0FP219moonbit_2dcommunity7rabbita19create__pure__stateGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(model, update) {
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22create__state__machineGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE((_discard_) => ({ _0: model, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none }), (model$2, msg, _discard_) => ({ _0: update(model$2, msg), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none }), undefined);
  const _node = _bind$3._0;
  const _emit = _bind$3._1;
  return { _0: _node, _1: _emit };
}
function _M0MP311Mr_2dHoujie14mbt_2ddiffview2ui5Model7initial() {
  return new _M0TP311Mr_2dHoujie14mbt_2ddiffview2ui5Model("MoonBit is a modern language for AI and large-scale software.\nIt compiles to WebAssembly, JavaScript and native.\nThe type system catches mistakes early.\n", "MoonBit is a modern language for AI and large software.\nIt compiles to WebAssembly, JavaScript and native.\nThe type system catches bugs early.\nA small diff viewer is included.\n", true);
}
function _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui6update(model, msg) {
  switch (msg.$tag) {
    case 0: {
      const _SetOld = msg;
      const _text = _SetOld._0;
      return new _M0TP311Mr_2dHoujie14mbt_2ddiffview2ui5Model(_text, model.new_text, model.word_level);
    }
    case 1: {
      const _SetNew = msg;
      const _text$2 = _SetNew._0;
      return new _M0TP311Mr_2dHoujie14mbt_2ddiffview2ui5Model(model.old_text, _text$2, model.word_level);
    }
    case 2: {
      return new _M0TP311Mr_2dHoujie14mbt_2ddiffview2ui5Model(model.old_text, model.new_text, !model.word_level);
    }
    case 3: {
      return new _M0TP311Mr_2dHoujie14mbt_2ddiffview2ui5Model(model.new_text, model.old_text, model.word_level);
    }
    default: {
      return new _M0TP311Mr_2dHoujie14mbt_2ddiffview2ui5Model("MoonBit is a modern language for AI and large-scale software.\nIt compiles to WebAssembly, JavaScript and native.\nThe type system catches mistakes early.\n", "MoonBit is a modern language for AI and large software.\nIt compiles to WebAssembly, JavaScript and native.\nThe type system catches bugs early.\nA small diff viewer is included.\n", model.word_level);
    }
  }
}
function _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui11span__nodes(spans, fallback) {
  if (spans.length === 0) {
    return [_M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui11span__nodesN6constrS77, undefined, -1, undefined, fallback)];
  }
  const nodes = [];
  const _bind$3 = spans.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const span = spans[_];
      const _bind$4 = span.kind;
      let class_name;
      switch (_bind$4) {
        case 0: {
          class_name = "eq";
          break;
        }
        case 1: {
          class_name = "del";
          break;
        }
        default: {
          class_name = "ins";
        }
      }
      _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(nodes, _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, class_name, undefined, -1, undefined, span.text));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return nodes;
}
function _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12number__text(value) {
  if (value === undefined) {
    return "";
  } else {
    const _Some = value;
    const _number = _Some;
    return _M0MPC13int3Int18to__string_2einner(_number, 10);
  }
}
function _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rows(result) {
  const rows = [];
  const _bind$3 = result.rows;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const row = _bind$3[_];
      const _bind$5 = row.kind;
      let class_name;
      switch (_bind$5) {
        case 0: {
          class_name = "row equal";
          break;
        }
        case 1: {
          class_name = "row delete";
          break;
        }
        case 2: {
          class_name = "row insert";
          break;
        }
        default: {
          class_name = "row change";
        }
      }
      const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html3divGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rowsN6constrS78, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12number__text(row.old_no));
      const _tmp$4 = row.old_spans;
      const _p = row.old_line;
      let _tmp$5;
      if (_p === undefined) {
        _tmp$5 = "";
      } else {
        const _p$2 = _p;
        _tmp$5 = _p$2;
      }
      const _tmp$6 = _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rowsN6constrS79, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui11span__nodes(_tmp$4, _tmp$5));
      const _tmp$7 = _M0FP319moonbit_2dcommunity7rabbita4html3divGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rowsN6constrS80, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12number__text(row.new_no));
      const _tmp$8 = row.new_spans;
      const _p$2 = row.new_line;
      let _tmp$9;
      if (_p$2 === undefined) {
        _tmp$9 = "";
      } else {
        const _p$3 = _p$2;
        _tmp$9 = _p$3;
      }
      _M0MPC15array5Array4pushGRP319moonbit_2dcommunity7rabbita4html4HtmlE(rows, _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, class_name, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$3, _tmp$6, _tmp$7, _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rowsN6constrS81, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui11span__nodes(_tmp$8, _tmp$9))]));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return rows;
}
function _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3app() {
  const _bind$3 = _M0FP219moonbit_2dcommunity7rabbita19create__pure__stateGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelRP311Mr_2dHoujie14mbt_2ddiffview2ui3MsgE(_M0MP311Mr_2dHoujie14mbt_2ddiffview2ui5Model7initial(), _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui6update);
  const _model = _bind$3._0;
  const _emit = _bind$3._1;
  return _M0MP219moonbit_2dcommunity7rabbita3Val4viewGRP311Mr_2dHoujie14mbt_2ddiffview2ui5ModelE(_model, (model) => {
    const options = _M0MP211Mr_2dHoujie14mbt_2ddiffview11DiffOptions6create(0, 3, model.word_level);
    const result = _M0FP211Mr_2dHoujie14mbt_2ddiffview10diff__text(model.old_text, model.new_text, options);
    const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS83, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html2h1GsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, undefined, "mbt-diffview"), _M0FP319moonbit_2dcommunity7rabbita4html1pGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, "纯 MoonBit 实现的文本 Diff 查看器：行级差异 + 词级高亮 + 统一补丁统计。")]);
    const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS84, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS85, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html3divGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS86, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "旧文本"), _M0FP319moonbit_2dcommunity7rabbita4html8textareaGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS87, undefined, -1, undefined, model.old_text, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS88, undefined, undefined, -1, -1, undefined, undefined, -1, -1, undefined, undefined, (text) => {
      const _func = _emit;
      return _func(new _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg6SetOld(text));
    }, undefined, "")]), _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS89, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_M0FP319moonbit_2dcommunity7rabbita4html3divGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS90, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "新文本"), _M0FP319moonbit_2dcommunity7rabbita4html8textareaGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS91, undefined, -1, undefined, model.new_text, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS92, undefined, undefined, -1, -1, undefined, undefined, -1, -1, undefined, undefined, (text) => {
      const _func = _emit;
      return _func(new _M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg6SetNew(text));
    }, undefined, "")])]);
    const _func = _emit;
    const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html6buttonGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, _func(_M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg10ToggleWord__), undefined, "词级高亮");
    const _func$2 = _emit;
    const _tmp$5 = _M0FP319moonbit_2dcommunity7rabbita4html6buttonGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, _func$2(_M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg4Swap__), undefined, "交换");
    const _func$3 = _emit;
    const _tmp$6 = _M0FP319moonbit_2dcommunity7rabbita4html6buttonGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, -1, undefined, undefined, -1, _func$3(_M0DTP311Mr_2dHoujie14mbt_2ddiffview2ui3Msg11LoadExample__), undefined, "载入示例");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(10);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "+");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, result.stats.added);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "  -");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, result.stats.removed);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "  ~");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, result.stats.changed);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "  =");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, result.stats.unchanged);
    return _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS82, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _tmp$3, _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS93, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$4, _tmp$5, _tmp$6, _M0FP319moonbit_2dcommunity7rabbita4html4spanGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS94, undefined, -1, undefined, _string_builder.val)]), _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3appN6constrS95, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, _M0FP311Mr_2dHoujie14mbt_2ddiffview2ui12render__rows(result))]);
  });
}
(() => {
  _M0MP219moonbit_2dcommunity7rabbita3App5mount(_M0FP219moonbit_2dcommunity7rabbita3new(_M0FP311Mr_2dHoujie14mbt_2ddiffview2ui3app), "app");
})();
