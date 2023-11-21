<script lang="ts">
</script>

<div class="buildings">
	<div class="building">
		<div class="icon">
			<img src="/game-img/buildings/cursor.png" alt="Cursor" />
		</div>
		<div class="name">Cursor</div>
		<div class="cost">235 fs</div>
	</div>
</div>

<style>
	.buildings {
		margin-top: 0.3rem;
	}
	.building {
		border: 1px solid #656262;
		padding: 0.2rem;
		background-color: #525252;
		border-radius: 0.3rem;
		display: flex;
		cursor: pointer;
	}
	.building:hover {
		background-color: #303030;
	}
	.building .icon {
		border: 1px solid #303030;
		width: 30px;
		height: 30px;
		text-align: center;
		background-color: #fff;
		border-radius: 0.3rem;
	}
	.building .name {
		flex: auto;
		padding: 0.1rem 0.3rem;
	}
	.building .icon img {
		height: 25px;
	}
</style>
