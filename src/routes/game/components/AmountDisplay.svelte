<script lang="ts">
	import type { TimeAmount } from '../scripts/models/TimeAmount';

	export let value: TimeAmount;
</script>

<span>{value.amount} {value.unit}</span>
