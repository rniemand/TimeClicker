<script lang="ts">
	import type { SimpleTab } from '../scripts/types/SimpleTab';

	export let tabs: SimpleTab[] = [];
	export let value: SimpleTab | undefined = undefined;

	const setActiveTab = (tab: SimpleTab) => {
		for (const t of tabs) {
			t.active = t === tab;
		}
		value = tab;
		tabs = tabs;
	};

	const valueChanged = (_value: SimpleTab | undefined) => {
		value = _value;
	};

	const tabsChanged = (_tabs: SimpleTab[]) => {
		if (_tabs.length === 0) return;
		const activeTab = _tabs.filter((x) => x.active)[0];
		if (!activeTab) {
			setActiveTab(_tabs[0]);
		} else {
			setActiveTab(activeTab);
		}
	};

	$: tabsChanged(tabs);
	$: valueChanged(value);
</script>

<div class="tabs">
	{#each tabs as tab}
		<a href="#!" class="tab" class:active={tab.active} on:click={() => setActiveTab(tab)}>
			{tab.name}
		</a>
	{/each}
</div>

<style>
	.tabs {
		display: flex;
		background-color: #323230;
		padding: 0.4em;
	}

	.tab {
		background-color: #0000003b;
		margin-right: 0.5rem;
		padding: 0.4rem 0.6rem;
		border-radius: 0.5rem;
		flex: auto;
		cursor: pointer;
		text-decoration: none;
		color: inherit;
	}
	.tab:last-child {
		margin-right: 0;
	}
	.tab:hover {
		background-color: #b7b98b3b;
	}
	.tab.active {
		background-color: #167704;
	}
</style>
