export const calculateMaximumIndefiniteFlow = (percentageOfDamage: number) => {
    if (percentageOfDamage >= 0 && percentageOfDamage <= 100) {
        let maximunIndefiniteFlow = 100;
        maximunIndefiniteFlow -= percentageOfDamage;
        return maximunIndefiniteFlow;
    } else return 0;
};


export const calculateMaximumSpeedPercentage = (damagePercentages: number[]) => {
    const numberOfInjectors = damagePercentages.length;
    if (numberOfInjectors > 0) {
        let maximunIndefiniteFlows: number[] = [];
        damagePercentages.forEach(damagePercentage => {
            maximunIndefiniteFlows.push(calculateMaximumIndefiniteFlow(damagePercentage));
        });
        const sumOfFlows = maximunIndefiniteFlows.reduce((a, b) => a + b);
        return sumOfFlows / numberOfInjectors;
    } else return 0;
};


export const calculateOperatingInjectorFlow = (damagePercentages: [], speedOfLightPercentage: number) => {
    const numberOfInjectors = damagePercentages.length;
    if (speedOfLightPercentage >= 0 && speedOfLightPercentage < 200 && numberOfInjectors > 0) {
        const requiredSpeedOfLight = numberOfInjectors * speedOfLightPercentage;
        let res: any = {
            Flows: [],
            operatingTime: 0,
            maximumSpeedPercentage: calculateMaximumSpeedPercentage(damagePercentages)
        };
        let maximumIndefiniteFlows: number[] = [];
        damagePercentages.forEach(damagePercentage => {
            maximumIndefiniteFlows.push(calculateMaximumIndefiniteFlow(damagePercentage));
        });
        const sumOfFlows = maximumIndefiniteFlows.reduce((a, b) => a + b);
        let difference = Math.abs(sumOfFlows - requiredSpeedOfLight);
        const divisor = numberOfInjectors - maximumIndefiniteFlows.filter(v => v === 0).length;
        let quotient = difference / divisor;
        if (sumOfFlows >= requiredSpeedOfLight) {
            maximumIndefiniteFlows.forEach((maximumIndefiniteFlow, index) => {
                console.log(difference, quotient, maximumIndefiniteFlow);
                if (maximumIndefiniteFlow >= quotient) {
                    difference -= quotient;
                    res.Flows.push((maximumIndefiniteFlow === 0) ? maximumIndefiniteFlow : maximumIndefiniteFlow - quotient);
                }
                else {
                    difference = difference - 2 * maximumIndefiniteFlow + quotient;
                    quotient = difference / (divisor - (index + 1));
                    res.Flows.push(maximumIndefiniteFlow);
                }
            });
            res.operatingTime = 'Infinite';
        } else {
            if (quotient <= 99) {
                maximumIndefiniteFlows.forEach(maximumIndefiniteFlow => {
                    res.Flows.push(maximumIndefiniteFlow === 0 ? maximumIndefiniteFlow : maximumIndefiniteFlow + quotient);
                });
                res.operatingTime = 100 - quotient;
            } else return 'Unable to comply';
        }
        return res;
    } else return 'Unable to comply';
};
