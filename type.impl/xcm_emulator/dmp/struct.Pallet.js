(function() {var type_impls = {
"xcm_emulator":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Callable%3CT%3E-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-Callable%3CT%3E-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Callable&lt;T&gt; for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.RuntimeCall\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.RuntimeCall\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">RuntimeCall</a> = <a class=\"enum\" href=\"xcm_emulator/dmp/enum.Call.html\" title=\"enum xcm_emulator::dmp::Call\">Call</a>&lt;T&gt;</h4></section></div></details>","Callable<T>","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.79.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"xcm_emulator/trait.Debug.html\" title=\"trait xcm_emulator::Debug\">Debug</a> for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"xcm_emulator/fmt/struct.Formatter.html\" title=\"struct xcm_emulator::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"xcm_emulator/fmt/struct.Error.html\" title=\"struct xcm_emulator::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"xcm_emulator/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FeeTracker-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-FeeTracker-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; FeeTracker for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.get_fee_factor\" class=\"method trait-impl\"><a href=\"#method.get_fee_factor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">get_fee_factor</a>(para: <a class=\"struct\" href=\"xcm_emulator/struct.ParaId.html\" title=\"struct xcm_emulator::ParaId\">Id</a>) -&gt; FixedU128</h4></section></div></details>","FeeTracker","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetStorageVersion-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-GetStorageVersion-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; GetStorageVersion for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.CurrentStorageVersion\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.CurrentStorageVersion\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">CurrentStorageVersion</a> = NoStorageVersionSet</h4></section></summary><div class='docblock'>This will be filled out by the <a href=\"crate::pallet\"><code>pallet</code></a> macro. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.current_storage_version\" class=\"method trait-impl\"><a href=\"#method.current_storage_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">current_storage_version</a>(\n) -&gt; &lt;<a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt; as GetStorageVersion&gt;::CurrentStorageVersion</h4></section></summary><div class='docblock'>Returns the current storage version as supported by the pallet.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_chain_storage_version\" class=\"method trait-impl\"><a href=\"#method.on_chain_storage_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_chain_storage_version</a>() -&gt; StorageVersion</h4></section></summary><div class='docblock'>Returns the on-chain storage version of the pallet as stored in the storage.</div></details></div></details>","GetStorageVersion","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hooks%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-Hooks%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"xcm_emulator/trait.Hooks.html\" title=\"trait xcm_emulator::Hooks\">Hooks</a>&lt;&lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt; for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_initialize\" class=\"method trait-impl\"><a href=\"#method.on_initialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Hooks.html#method.on_initialize\" class=\"fn\">on_initialize</a>(_n: BlockNumber) -&gt; <a class=\"struct\" href=\"xcm_emulator/struct.Weight.html\" title=\"struct xcm_emulator::Weight\">Weight</a></h4></section></summary><div class='docblock'>Block initialization hook. This is called at the very beginning of block execution. <a href=\"xcm_emulator/trait.Hooks.html#method.on_initialize\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_finalize\" class=\"method trait-impl\"><a href=\"#method.on_finalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Hooks.html#method.on_finalize\" class=\"fn\">on_finalize</a>(_n: BlockNumber)</h4></section></summary><div class='docblock'>Block finalization hook. This is called at the very end of block execution. <a href=\"xcm_emulator/trait.Hooks.html#method.on_finalize\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_idle\" class=\"method trait-impl\"><a href=\"#method.on_idle\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Hooks.html#method.on_idle\" class=\"fn\">on_idle</a>(_n: BlockNumber, _remaining_weight: <a class=\"struct\" href=\"xcm_emulator/struct.Weight.html\" title=\"struct xcm_emulator::Weight\">Weight</a>) -&gt; <a class=\"struct\" href=\"xcm_emulator/struct.Weight.html\" title=\"struct xcm_emulator::Weight\">Weight</a></h4></section></summary><div class='docblock'>Hook to consume a block’s idle time. This will run when the block is being finalized (before\n<a href=\"xcm_emulator/trait.Hooks.html#method.on_finalize\" title=\"associated function xcm_emulator::Hooks::on_finalize\"><code>Hooks::on_finalize</code></a>). <a href=\"xcm_emulator/trait.Hooks.html#method.on_idle\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_runtime_upgrade\" class=\"method trait-impl\"><a href=\"#method.on_runtime_upgrade\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Hooks.html#method.on_runtime_upgrade\" class=\"fn\">on_runtime_upgrade</a>() -&gt; <a class=\"struct\" href=\"xcm_emulator/struct.Weight.html\" title=\"struct xcm_emulator::Weight\">Weight</a></h4></section></summary><div class='docblock'>Hook executed when a code change (aka. a “runtime upgrade”) is detected by FRAME. <a href=\"xcm_emulator/trait.Hooks.html#method.on_runtime_upgrade\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offchain_worker\" class=\"method trait-impl\"><a href=\"#method.offchain_worker\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Hooks.html#method.offchain_worker\" class=\"fn\">offchain_worker</a>(_n: BlockNumber)</h4></section></summary><div class='docblock'>Implementing this function on a pallet allows you to perform long-running tasks that are\ndispatched as separate threads, and entirely independent of the main wasm runtime. <a href=\"xcm_emulator/trait.Hooks.html#method.offchain_worker\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.integrity_test\" class=\"method trait-impl\"><a href=\"#method.integrity_test\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"xcm_emulator/trait.Hooks.html#method.integrity_test\" class=\"fn\">integrity_test</a>()</h4></section></summary><div class='docblock'>Check the integrity of this pallet’s configuration. <a href=\"xcm_emulator/trait.Hooks.html#method.integrity_test\">Read more</a></div></details></div></details>","Hooks<<<<T as Config>::Block as HeaderProvider>::HeaderT as Header>::Number>","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntegrityTest-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-IntegrityTest-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; IntegrityTest for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.integrity_test\" class=\"method trait-impl\"><a href=\"#method.integrity_test\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">integrity_test</a>()</h4></section></summary><div class='docblock'>See <a href=\"xcm_emulator/trait.Hooks.html#method.integrity_test\" title=\"associated function xcm_emulator::Hooks::integrity_test\"><code>Hooks::integrity_test</code></a>.</div></details></div></details>","IntegrityTest","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OffchainWorker%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-OffchainWorker%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; OffchainWorker&lt;&lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt; for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.offchain_worker\" class=\"method trait-impl\"><a href=\"#method.offchain_worker\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">offchain_worker</a>(\n    n: &lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number\n)</h4></section></summary><div class='docblock'>This function is being called after every block import (when fully synced). <a>Read more</a></div></details></div></details>","OffchainWorker<<<<T as Config>::Block as HeaderProvider>::HeaderT as Header>::Number>","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OnFinalize%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-OnFinalize%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; OnFinalize&lt;&lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt; for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_finalize\" class=\"method trait-impl\"><a href=\"#method.on_finalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_finalize</a>(\n    n: &lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number\n)</h4></section></summary><div class='docblock'>See <a href=\"xcm_emulator/trait.Hooks.html#method.on_finalize\" title=\"associated function xcm_emulator::Hooks::on_finalize\"><code>Hooks::on_finalize</code></a>.</div></details></div></details>","OnFinalize<<<<T as Config>::Block as HeaderProvider>::HeaderT as Header>::Number>","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OnGenesis-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-OnGenesis-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; OnGenesis for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_genesis\" class=\"method trait-impl\"><a href=\"#method.on_genesis\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_genesis</a>()</h4></section></summary><div class='docblock'>Something that should happen at genesis.</div></details></div></details>","OnGenesis","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OnIdle%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-OnIdle%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; OnIdle&lt;&lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt; for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_idle\" class=\"method trait-impl\"><a href=\"#method.on_idle\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_idle</a>(\n    n: &lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number,\n    remaining_weight: <a class=\"struct\" href=\"xcm_emulator/struct.Weight.html\" title=\"struct xcm_emulator::Weight\">Weight</a>\n) -&gt; <a class=\"struct\" href=\"xcm_emulator/struct.Weight.html\" title=\"struct xcm_emulator::Weight\">Weight</a></h4></section></summary><div class='docblock'>See <a href=\"xcm_emulator/trait.Hooks.html#method.on_idle\" title=\"associated function xcm_emulator::Hooks::on_idle\"><code>Hooks::on_idle</code></a>.</div></details></div></details>","OnIdle<<<<T as Config>::Block as HeaderProvider>::HeaderT as Header>::Number>","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OnInitialize%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-OnInitialize%3C%3C%3C%3CT+as+Config%3E::Block+as+HeaderProvider%3E::HeaderT+as+Header%3E::Number%3E-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; OnInitialize&lt;&lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt; for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_initialize\" class=\"method trait-impl\"><a href=\"#method.on_initialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_initialize</a>(\n    n: &lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number\n) -&gt; <a class=\"struct\" href=\"xcm_emulator/struct.Weight.html\" title=\"struct xcm_emulator::Weight\">Weight</a></h4></section></summary><div class='docblock'>See <a href=\"xcm_emulator/trait.Hooks.html#method.on_initialize\" title=\"associated function xcm_emulator::Hooks::on_initialize\"><code>Hooks::on_initialize</code></a>.</div></details></div></details>","OnInitialize<<<<T as Config>::Block as HeaderProvider>::HeaderT as Header>::Number>","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OnRuntimeUpgrade-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-OnRuntimeUpgrade-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_runtime_upgrade\" class=\"method trait-impl\"><a href=\"#method.on_runtime_upgrade\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">on_runtime_upgrade</a>() -&gt; <a class=\"struct\" href=\"xcm_emulator/struct.Weight.html\" title=\"struct xcm_emulator::Weight\">Weight</a></h4></section></summary><div class='docblock'>See <a href=\"xcm_emulator/trait.Hooks.html#method.on_runtime_upgrade\" title=\"associated function xcm_emulator::Hooks::on_runtime_upgrade\"><code>Hooks::on_runtime_upgrade</code></a>.</div></details></div></details>","OnRuntimeUpgrade","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"docblock\"><p>Routines and getters related to downward message passing.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.can_queue_downward_message\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"xcm_emulator/dmp/struct.Pallet.html#tymethod.can_queue_downward_message\" class=\"fn\">can_queue_downward_message</a>(\n    config: &amp;HostConfiguration&lt;&lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt;,\n    para: &amp;<a class=\"struct\" href=\"xcm_emulator/struct.ParaId.html\" title=\"struct xcm_emulator::ParaId\">Id</a>,\n    msg: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.u8.html\">u8</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"xcm_emulator/dmp/enum.QueueDownwardMessageError.html\" title=\"enum xcm_emulator::dmp::QueueDownwardMessageError\">QueueDownwardMessageError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Determine whether enqueuing a downward message to a specific recipient para would result\nin an error. If this returns <code>Ok(())</code> the caller can be certain that a call to\n<code>queue_downward_message</code> with the same parameters will be successful.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.queue_downward_message\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"xcm_emulator/dmp/struct.Pallet.html#tymethod.queue_downward_message\" class=\"fn\">queue_downward_message</a>(\n    config: &amp;HostConfiguration&lt;&lt;&lt;&lt;T as <a class=\"trait\" href=\"xcm_emulator/trait.SystemConfig.html\" title=\"trait xcm_emulator::SystemConfig\">Config</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.SystemConfig.html#associatedtype.Block\" title=\"type xcm_emulator::SystemConfig::Block\">Block</a> as HeaderProvider&gt;::HeaderT as Header&gt;::Number&gt;,\n    para: <a class=\"struct\" href=\"xcm_emulator/struct.ParaId.html\" title=\"struct xcm_emulator::ParaId\">Id</a>,\n    msg: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.u8.html\">u8</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"xcm_emulator/dmp/enum.QueueDownwardMessageError.html\" title=\"enum xcm_emulator::dmp::QueueDownwardMessageError\">QueueDownwardMessageError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Enqueue a downward message to a specific recipient para.</p>\n<p>When encoded, the message should not exceed the <code>config.max_downward_message_size</code>.\nOtherwise, the message won’t be sent and <code>Err</code> will be returned.</p>\n<p>It is possible to send a downward message to a non-existent para. That, however, would lead\nto a dangling storage. If the caller cannot statically prove that the recipient exists\nthen the caller should perform a runtime check.</p>\n</div></details></div></details>",0,"xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PalletInfoAccess-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-PalletInfoAccess-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; PalletInfoAccess for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.index\" class=\"method trait-impl\"><a href=\"#method.index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">index</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Index of the pallet as configured in the runtime.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method trait-impl\"><a href=\"#method.name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">name</a>() -&gt; &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Name of the pallet as configured in the runtime.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.module_name\" class=\"method trait-impl\"><a href=\"#method.module_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">module_name</a>() -&gt; &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Name of the Rust module containing the pallet.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.crate_version\" class=\"method trait-impl\"><a href=\"#method.crate_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">crate_version</a>() -&gt; CrateVersion</h4></section></summary><div class='docblock'>Version of the crate containing the pallet.</div></details></div></details>","PalletInfoAccess","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PalletsInfoAccess-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-PalletsInfoAccess-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; PalletsInfoAccess for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.count\" class=\"method trait-impl\"><a href=\"#method.count\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">count</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>The number of pallets’ information that this type represents. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.infos\" class=\"method trait-impl\"><a href=\"#method.infos\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">infos</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;PalletInfoData&gt;</h4></section></summary><div class='docblock'>All of the pallets’ information that this type represents.</div></details></div></details>","PalletsInfoAccess","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.79.0/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StorageInfoTrait-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-StorageInfoTrait-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; StorageInfoTrait for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.storage_info\" class=\"method trait-impl\"><a href=\"#method.storage_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">storage_info</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;StorageInfo&gt;</h4></section></div></details>","StorageInfoTrait","xcm_emulator::dmp::Module"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WhitelistedStorageKeys-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-WhitelistedStorageKeys-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; WhitelistedStorageKeys for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/dmp/trait.Config.html\" title=\"trait xcm_emulator::dmp::Config\">Config</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.whitelisted_storage_keys\" class=\"method trait-impl\"><a href=\"#method.whitelisted_storage_keys\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">whitelisted_storage_keys</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;TrackedStorageKey&gt;</h4></section></summary><div class='docblock'>Returns a <a href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\"><code>Vec&lt;TrackedStorageKey&gt;</code></a> indicating the storage keys that\nshould be whitelisted during benchmarking. This means that those keys\nwill be excluded from the benchmarking performance calculation.</div></details></div></details>","WhitelistedStorageKeys","xcm_emulator::dmp::Module"],["<section id=\"impl-Eq-for-Pallet%3CT%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Pallet%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"xcm_emulator/dmp/struct.Pallet.html\" title=\"struct xcm_emulator::dmp::Pallet\">Pallet</a>&lt;T&gt;</h3></section>","Eq","xcm_emulator::dmp::Module"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()