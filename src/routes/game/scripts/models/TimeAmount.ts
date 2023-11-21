export class TimeAmount {
	public unit: string = '';
	public amount: number = 0;
	private _divider: number;
	private _unitMaxValue: number;

	constructor(private rawAmount: number) {
		this.unit = this._getUnit(rawAmount);
		this.amount = rawAmount;
		this._divider = this._getDivider(this.unit);
		this._unitMaxValue = this._getUnitMaxValue(this.unit);
	}

	private _getUnit = (rawAmount: number) => {
		if (rawAmount <= 1000000) return 'nanoseconds';
		if (rawAmount <= 1000000000) return 'microseconds';
		if (rawAmount <= 1000000000000) return 'milliseconds';
		if (rawAmount <= 1000000000000000) return 'seconds';
		if (rawAmount <= 60000000000000000) return 'minutes';
		if (rawAmount <= 3600000000000000000) return 'hours';
		if (rawAmount <= 86400000000000000000) return 'days';
		if (rawAmount <= 604800000000000000000) return 'weeks';
		throw new Error('Complete me');
	};

	private _getDivider = (unit: string) => {
		if (unit === 'nanoseconds') return 1;
		throw new Error('Complete me');
	};

	private _getUnitMaxValue = (unit: string) => {
		if (unit === 'nanoseconds') return 1000000;
		throw new Error('Complete me');
	};
}

/*
month               2 629 800 000 000 000 000 000
year                31 557 600 000 000 000 000 000
decade              315 576 000 000 000 000 000 000
century             3 155 760 000000 000 000 000 000
millennium          31 557 600 000 000 000 000 000 000
megannum            31 557 600 000 000 000 000 000 000 000
aeon                31 557 600 000 000 000 000 000 000 000 000
*/
