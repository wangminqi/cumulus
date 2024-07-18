(function() {var type_impls = {
"asset_hub_kusama_integration_tests":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Test%3COrigin,+Destination,+Hops,+Args%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Test%3COrigin,+Destination,+Hops,+Args%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.Test.html\" title=\"struct asset_hub_kusama_integration_tests::Test\">Test</a>&lt;Origin, Destination, Hops, Args&gt;<div class=\"where\">where\n    Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html\" title=\"trait asset_hub_kusama_integration_tests::Chain\">Chain</a>,\n    Destination: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html\" title=\"trait asset_hub_kusama_integration_tests::Chain\">Chain</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;Origin as <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html\" title=\"trait asset_hub_kusama_integration_tests::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type asset_hub_kusama_integration_tests::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.OriginTrait.html\" title=\"trait asset_hub_kusama_integration_tests::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.AccountId32.html\" title=\"struct asset_hub_kusama_integration_tests::AccountId32\">AccountId32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;Destination as <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html\" title=\"trait asset_hub_kusama_integration_tests::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type asset_hub_kusama_integration_tests::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.OriginTrait.html\" title=\"trait asset_hub_kusama_integration_tests::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.AccountId32.html\" title=\"struct asset_hub_kusama_integration_tests::AccountId32\">AccountId32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.Test.html\" title=\"struct asset_hub_kusama_integration_tests::Test\">Test</a>&lt;Origin, Destination, Hops, Args&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.79.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","asset_hub_kusama_integration_tests::RelayToSystemParaTest","asset_hub_kusama_integration_tests::SystemParaToRelayTest","asset_hub_kusama_integration_tests::SystemParaToParaTest"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Test%3COrigin,+Destination,+Hops,+Args%3E\" class=\"impl\"><a href=\"#impl-Test%3COrigin,+Destination,+Hops,+Args%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Origin, Destination, Hops, Args&gt; <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.Test.html\" title=\"struct asset_hub_kusama_integration_tests::Test\">Test</a>&lt;Origin, Destination, Hops, Args&gt;<div class=\"where\">where\n    Args: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Origin: <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html\" title=\"trait asset_hub_kusama_integration_tests::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + CheckAssertion&lt;Origin, Destination, Hops, Args&gt;,\n    Destination: <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html\" title=\"trait asset_hub_kusama_integration_tests::Chain\">Chain</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + CheckAssertion&lt;Origin, Destination, Hops, Args&gt;,\n    &lt;Origin as <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html\" title=\"trait asset_hub_kusama_integration_tests::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type asset_hub_kusama_integration_tests::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.OriginTrait.html\" title=\"trait asset_hub_kusama_integration_tests::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.AccountId32.html\" title=\"struct asset_hub_kusama_integration_tests::AccountId32\">AccountId32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;Destination as <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html\" title=\"trait asset_hub_kusama_integration_tests::Chain\">Chain</a>&gt;::<a class=\"associatedtype\" href=\"asset_hub_kusama_integration_tests/trait.Chain.html#associatedtype.RuntimeOrigin\" title=\"type asset_hub_kusama_integration_tests::Chain::RuntimeOrigin\">RuntimeOrigin</a>: <a class=\"trait\" href=\"asset_hub_kusama_integration_tests/trait.OriginTrait.html\" title=\"trait asset_hub_kusama_integration_tests::OriginTrait\">OriginTrait</a>&lt;AccountId = <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.AccountId32.html\" title=\"struct asset_hub_kusama_integration_tests::AccountId32\">AccountId32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Hops: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + CheckAssertion&lt;Origin, Destination, Hops, Args&gt;,</div></h3></section></summary><div class=\"docblock\"><p><code>Test</code> implementation</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_kusama_integration_tests/struct.Test.html#tymethod.new\" class=\"fn\">new</a>(\n    test_args: <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.TestContext.html\" title=\"struct asset_hub_kusama_integration_tests::TestContext\">TestContext</a>&lt;Args&gt;\n) -&gt; <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.Test.html\" title=\"struct asset_hub_kusama_integration_tests::Test\">Test</a>&lt;Origin, Destination, Hops, Args&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>Test</code> instance</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_assertion\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_kusama_integration_tests/struct.Test.html#tymethod.set_assertion\" class=\"fn\">set_assertion</a>&lt;Hop&gt;(\n    &amp;mut self,\n    assertion: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.fn.html\">fn</a>(_: <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.Test.html\" title=\"struct asset_hub_kusama_integration_tests::Test\">Test</a>&lt;Origin, Destination, Hops, Args&gt;)\n)</h4></section></summary><div class=\"docblock\"><p>Stores an assertion in a particular Chain</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_dispatchable\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_kusama_integration_tests/struct.Test.html#tymethod.set_dispatchable\" class=\"fn\">set_dispatchable</a>&lt;Hop&gt;(\n    &amp;mut self,\n    dispatchable: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.fn.html\">fn</a>(_: <a class=\"struct\" href=\"asset_hub_kusama_integration_tests/struct.Test.html\" title=\"struct asset_hub_kusama_integration_tests::Test\">Test</a>&lt;Origin, Destination, Hops, Args&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"asset_hub_kusama_integration_tests/enum.DispatchError.html\" title=\"enum asset_hub_kusama_integration_tests::DispatchError\">DispatchError</a>&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Stores an assertion in a particular Chain</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_kusama_integration_tests/struct.Test.html#tymethod.assert\" class=\"fn\">assert</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Executes all dispatchables and assertions in order from <code>Origin</code> to <code>Destination</code></p>\n</div></details></div></details>",0,"asset_hub_kusama_integration_tests::RelayToSystemParaTest","asset_hub_kusama_integration_tests::SystemParaToRelayTest","asset_hub_kusama_integration_tests::SystemParaToParaTest"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()