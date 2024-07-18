(function() {var type_impls = {
"cumulus_test_client":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-TestClientBuilder%3CBlock,+ExecutorDispatch,+Backend%3CBlock%3E,+G%3E\" class=\"impl\"><a href=\"#impl-Default-for-TestClientBuilder%3CBlock,+ExecutorDispatch,+Backend%3CBlock%3E,+G%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, ExecutorDispatch, G&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for TestClientBuilder&lt;Block, ExecutorDispatch, <a class=\"struct\" href=\"cumulus_test_client/sc_client_db/struct.Backend.html\" title=\"struct cumulus_test_client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;, G&gt;<div class=\"where\">where\n    Block: Block,\n    G: <a class=\"trait\" href=\"cumulus_test_client/trait.GenesisInit.html\" title=\"trait cumulus_test_client::GenesisInit\">GenesisInit</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; TestClientBuilder&lt;Block, ExecutorDispatch, <a class=\"struct\" href=\"cumulus_test_client/sc_client_db/struct.Backend.html\" title=\"struct cumulus_test_client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;, G&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.79.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","cumulus_test_client::TestClientBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TestClientBuilder%3CBlock,+ExecutorDispatch,+Backend%3CBlock%3E,+G%3E\" class=\"impl\"><a href=\"#impl-TestClientBuilder%3CBlock,+ExecutorDispatch,+Backend%3CBlock%3E,+G%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, ExecutorDispatch, G&gt; TestClientBuilder&lt;Block, ExecutorDispatch, <a class=\"struct\" href=\"cumulus_test_client/sc_client_db/struct.Backend.html\" title=\"struct cumulus_test_client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;, G&gt;<div class=\"where\">where\n    Block: Block,\n    G: <a class=\"trait\" href=\"cumulus_test_client/trait.GenesisInit.html\" title=\"trait cumulus_test_client::GenesisInit\">GenesisInit</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_default_backend\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_default_backend</a>(\n) -&gt; TestClientBuilder&lt;Block, ExecutorDispatch, <a class=\"struct\" href=\"cumulus_test_client/sc_client_db/struct.Backend.html\" title=\"struct cumulus_test_client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;, G&gt;</h4></section></summary><div class=\"docblock\"><p>Create new <code>TestClientBuilder</code> with default backend.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_pruning_window\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_pruning_window</a>(\n    blocks_pruning: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.u32.html\">u32</a>\n) -&gt; TestClientBuilder&lt;Block, ExecutorDispatch, <a class=\"struct\" href=\"cumulus_test_client/sc_client_db/struct.Backend.html\" title=\"struct cumulus_test_client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;, G&gt;</h4></section></summary><div class=\"docblock\"><p>Create new <code>TestClientBuilder</code> with default backend and pruning window size</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_tx_storage\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_tx_storage</a>(\n    blocks_pruning: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.u32.html\">u32</a>\n) -&gt; TestClientBuilder&lt;Block, ExecutorDispatch, <a class=\"struct\" href=\"cumulus_test_client/sc_client_db/struct.Backend.html\" title=\"struct cumulus_test_client::sc_client_db::Backend\">Backend</a>&lt;Block&gt;, G&gt;</h4></section></summary><div class=\"docblock\"><p>Create new <code>TestClientBuilder</code> with default backend and storage chain mode</p>\n</div></details></div></details>",0,"cumulus_test_client::TestClientBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TestClientBuilder%3CBlock,+ExecutorDispatch,+Backend,+G%3E\" class=\"impl\"><a href=\"#impl-TestClientBuilder%3CBlock,+ExecutorDispatch,+Backend,+G%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, ExecutorDispatch, Backend, G&gt; TestClientBuilder&lt;Block, ExecutorDispatch, Backend, G&gt;<div class=\"where\">where\n    Block: Block,\n    G: <a class=\"trait\" href=\"cumulus_test_client/trait.GenesisInit.html\" title=\"trait cumulus_test_client::GenesisInit\">GenesisInit</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_backend\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">with_backend</a>(\n    backend: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Backend&gt;\n) -&gt; TestClientBuilder&lt;Block, ExecutorDispatch, Backend, G&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new instance of the test client builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.genesis_init_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">genesis_init_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;mut G</a></h4></section></summary><div class=\"docblock\"><p>Alter the genesis storage parameters.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.backend\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">backend</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Backend&gt;</h4></section></summary><div class=\"docblock\"><p>Give access to the underlying backend of these clients</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_child_storage\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">add_child_storage</a>(\n    self,\n    child_info: &amp;ChildInfo,\n    key: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.u8.html\">u8</a>]&gt;,\n    value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.u8.html\">u8</a>]&gt;\n) -&gt; TestClientBuilder&lt;Block, ExecutorDispatch, Backend, G&gt;</h4></section></summary><div class=\"docblock\"><p>Extend child storage</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_block_rules\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_block_rules</a>(\n    self,\n    fork_blocks: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(&lt;&lt;Block as Block&gt;::Header as Header&gt;::Number, &lt;Block as Block&gt;::Hash)&gt;&gt;,\n    bad_blocks: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;&lt;Block as Block&gt;::Hash&gt;&gt;\n) -&gt; TestClientBuilder&lt;Block, ExecutorDispatch, Backend, G&gt;</h4></section></summary><div class=\"docblock\"><p>Sets custom block rules.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.enable_offchain_indexing_api\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">enable_offchain_indexing_api</a>(\n    self\n) -&gt; TestClientBuilder&lt;Block, ExecutorDispatch, Backend, G&gt;</h4></section></summary><div class=\"docblock\"><p>Enable the offchain indexing api.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_no_genesis\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_no_genesis</a>(\n    self\n) -&gt; TestClientBuilder&lt;Block, ExecutorDispatch, Backend, G&gt;</h4></section></summary><div class=\"docblock\"><p>Disable writing genesis.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_with_executor\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">build_with_executor</a>&lt;RuntimeApi&gt;(\n    self,\n    executor: ExecutorDispatch\n) -&gt; (<a class=\"struct\" href=\"cumulus_test_client/client/struct.Client.html\" title=\"struct cumulus_test_client::client::Client\">Client</a>&lt;Backend, ExecutorDispatch, Block, RuntimeApi&gt;, LongestChain&lt;Backend, Block&gt;)<div class=\"where\">where\n    ExecutorDispatch: CallExecutor&lt;Block&gt; + <a class=\"trait\" href=\"cumulus_test_client/sc_executor/trait.RuntimeVersionOf.html\" title=\"trait cumulus_test_client::sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    Backend: Backend&lt;Block&gt;,\n    &lt;Backend as Backend&lt;Block&gt;&gt;::OffchainStorage: 'static,</div></h4></section></summary><div class=\"docblock\"><p>Build the test client with the given native executor.</p>\n</div></details></div></details>",0,"cumulus_test_client::TestClientBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TestClientBuilder%3CBlock,+LocalCallExecutor%3CBlock,+Backend,+NativeElseWasmExecutor%3CD%3E%3E,+Backend,+G%3E\" class=\"impl\"><a href=\"#impl-TestClientBuilder%3CBlock,+LocalCallExecutor%3CBlock,+Backend,+NativeElseWasmExecutor%3CD%3E%3E,+Backend,+G%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, D, Backend, G&gt; TestClientBuilder&lt;Block, <a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, Backend, <a class=\"struct\" href=\"cumulus_test_client/struct.NativeElseWasmExecutor.html\" title=\"struct cumulus_test_client::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;&gt;, Backend, G&gt;<div class=\"where\">where\n    Block: Block,\n    G: <a class=\"trait\" href=\"cumulus_test_client/trait.GenesisInit.html\" title=\"trait cumulus_test_client::GenesisInit\">GenesisInit</a>,\n    D: <a class=\"trait\" href=\"cumulus_test_client/sc_executor/trait.NativeExecutionDispatch.html\" title=\"trait cumulus_test_client::sc_executor::NativeExecutionDispatch\">NativeExecutionDispatch</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_with_native_executor\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">build_with_native_executor</a>&lt;RuntimeApi, I&gt;(\n    self,\n    executor: I\n) -&gt; (<a class=\"struct\" href=\"cumulus_test_client/client/struct.Client.html\" title=\"struct cumulus_test_client::client::Client\">Client</a>&lt;Backend, <a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, Backend, <a class=\"struct\" href=\"cumulus_test_client/struct.NativeElseWasmExecutor.html\" title=\"struct cumulus_test_client::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;&gt;, Block, RuntimeApi&gt;, LongestChain&lt;Backend, Block&gt;)<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cumulus_test_client/struct.NativeElseWasmExecutor.html\" title=\"struct cumulus_test_client::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;&gt;&gt;,\n    D: <a class=\"trait\" href=\"cumulus_test_client/sc_executor/trait.NativeExecutionDispatch.html\" title=\"trait cumulus_test_client::sc_executor::NativeExecutionDispatch\">NativeExecutionDispatch</a> + 'static,\n    Backend: Backend&lt;Block&gt; + 'static,</div></h4></section></summary><div class=\"docblock\"><p>Build the test client with the given native executor.</p>\n</div></details></div></details>",0,"cumulus_test_client::TestClientBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()