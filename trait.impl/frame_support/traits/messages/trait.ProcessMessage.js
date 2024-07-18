(function() {var implementors = {
"xcm_emulator":[["impl&lt;T&gt; <a class=\"trait\" href=\"xcm_emulator/trait.ProcessMessage.html\" title=\"trait xcm_emulator::ProcessMessage\">ProcessMessage</a> for <a class=\"struct\" href=\"xcm_emulator/struct.DefaultMessageProcessor.html\" title=\"struct xcm_emulator::DefaultMessageProcessor\">DefaultMessageProcessor</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/trait.Chain.html\" title=\"trait xcm_emulator::Chain\">Chain</a> + <a class=\"trait\" href=\"xcm_emulator/trait.RelayChain.html\" title=\"trait xcm_emulator::RelayChain\">RelayChain</a>,\n    T::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a>: <a class=\"trait\" href=\"xcm_emulator/trait.MessageQueueConfig.html\" title=\"trait xcm_emulator::MessageQueueConfig\">MessageQueueConfig</a>,\n    &lt;&lt;T::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a> as <a class=\"trait\" href=\"xcm_emulator/trait.MessageQueueConfig.html\" title=\"trait xcm_emulator::MessageQueueConfig\">MessageQueueConfig</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.MessageQueueConfig.html#associatedtype.MessageProcessor\" title=\"type xcm_emulator::MessageQueueConfig::MessageProcessor\">MessageProcessor</a> as <a class=\"trait\" href=\"xcm_emulator/trait.ProcessMessage.html\" title=\"trait xcm_emulator::ProcessMessage\">ProcessMessage</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.ProcessMessage.html#associatedtype.Origin\" title=\"type xcm_emulator::ProcessMessage::Origin\">Origin</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"xcm_emulator/enum.AggregateMessageOrigin.html\" title=\"enum xcm_emulator::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt;,\n    <a class=\"struct\" href=\"xcm_emulator/struct.MessageQueuePallet.html\" title=\"struct xcm_emulator::MessageQueuePallet\">MessageQueuePallet</a>&lt;T::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a>&gt;: <a class=\"trait\" href=\"xcm_emulator/trait.EnqueueMessage.html\" title=\"trait xcm_emulator::EnqueueMessage\">EnqueueMessage</a>&lt;<a class=\"enum\" href=\"xcm_emulator/enum.AggregateMessageOrigin.html\" title=\"enum xcm_emulator::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt; + <a class=\"trait\" href=\"xcm_emulator/trait.ServiceQueues.html\" title=\"trait xcm_emulator::ServiceQueues\">ServiceQueues</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()