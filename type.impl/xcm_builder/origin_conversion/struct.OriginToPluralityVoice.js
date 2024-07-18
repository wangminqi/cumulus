(function() {var type_impls = {
"collectives_polkadot_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryConvert%3CRuntimeOrigin,+MultiLocation%3E-for-OriginToPluralityVoice%3CRuntimeOrigin,+EnsureBodyOrigin,+Body%3E\" class=\"impl\"><a href=\"#impl-TryConvert%3CRuntimeOrigin,+MultiLocation%3E-for-OriginToPluralityVoice%3CRuntimeOrigin,+EnsureBodyOrigin,+Body%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeOrigin, EnsureBodyOrigin, Body&gt; TryConvert&lt;RuntimeOrigin, MultiLocation&gt; for OriginToPluralityVoice&lt;RuntimeOrigin, EnsureBodyOrigin, Body&gt;<div class=\"where\">where\n    RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    EnsureBodyOrigin: EnsureOrigin&lt;RuntimeOrigin&gt;,\n    Body: Get&lt;BodyId&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_convert\" class=\"method trait-impl\"><a href=\"#method.try_convert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_convert</a>(o: RuntimeOrigin) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;MultiLocation, RuntimeOrigin&gt;</h4></section></summary><div class='docblock'>Attempt to make conversion. If returning <a href=\"https://doc.rust-lang.org/1.79.0/core/result/enum.Result.html#variant.Err\" title=\"variant core::result::Result::Err\">Result::Err</a>, the inner must always be <code>a</code>.</div></details></div></details>","TryConvert<RuntimeOrigin, MultiLocation>","collectives_polkadot_runtime::xcm_config::FellowsToPlurality"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()