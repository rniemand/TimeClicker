<script lang="ts">
	import AmountDisplay from './components/AmountDisplay.svelte';
	import BuildingsMenu from './components/BuildingsMenu.svelte';
	import SimpleTabs from './components/SimpleTabs.svelte';
	import UpgradeMenu from './components/UpgradeMenu.svelte';
	import { TimeAmount } from './scripts/models/TimeAmount';
	import type { SimpleTab } from './scripts/types/SimpleTab';

	let tabs: SimpleTab[] = [{ name: 'Buildings' }, { name: 'Upgrades' }];
	let currentValue: TimeAmount = new TimeAmount(0);
	let selectedTab: SimpleTab | undefined = undefined;
</script>

<div class="container">
	<div class="row">
		<div class="col text-center">
			You have <AmountDisplay value={currentValue} />
		</div>
	</div>
	<div class="row">
		<div class="col">
			<img src="/game-img/clock.png" alt="" />
		</div>
		<div class="col">game goes here</div>
		<div class="col">
			<SimpleTabs {tabs} bind:value={selectedTab} />
			{#if selectedTab?.name === 'Buildings'}
				<BuildingsMenu />
			{:else if selectedTab?.name === 'Upgrades'}
				<UpgradeMenu />
			{/if}
		</div>
	</div>
</div>
