function frmSubmit(element) {
    var CustomerName = element.customer_name.value;
    alert(CustomerName);
    localStorage.setItem("CustomerName", CustomerName);
    var OldUnits = element.old_units.value;
    alert(OldUnits);
    var NewUnits = element.new_units.value;
    alert(NewUnits);
    var CurrentUnits = (NewUnits - OldUnits);
    localStorage.setItem("ConsumedUnits", CurrentUnits + " units");
    var tariffTypes = element.tariff.value;
    alert(tariffTypes);
    localStorage.setItem("TariffType", tariffTypes);
    SupplyType = document.querySelector(
        'input[name="supply_type"]:checked'
    ).value;

    alert(SupplyType);
    localStorage.setItem("SuppliedType", SupplyType);
    var CostPrice;
    if (CurrentUnits > 0) {
        console.log("The Units are Valid");
        alert("The Units are  Valid");
        if (SupplyType == "II-Low Tension supply") {
            console.log(
                'You can choose "I-A","I-B","I-C",II-A","II-B1","II-B2,"II-C","III-A1","III-A2,"III-B,"IV","V","VI.'
            );
            if (tariffTypes == "I-A") {
                if (200 >= CurrentUnits) {
                    let cost,
                        units,
                        servicechargesUntil200 = 20;
                    units = CurrentUnits - 100;
                    console.log(`The consumed units is ${units}`);
                    cost = units * 1.5;
                    console.log(`The unit cost is ${cost}`);
                    CostPrice = Math.round(cost + servicechargesUntil200);
                    console.log(
                        `The Electricity Cost for I-A is ${Math.round(CostPrice)}`
                    );
                } else if (CurrentUnits > 200 && CurrentUnits <= 500) {
                    let RemainingCurrentUnitsSub100,
                        RemainingCurrentUnitsSub200,
                        servicecharges = 30;

                    RemainingCurrentUnitsSub100 = CurrentUnits - 100;
                    console.log(`CurrentUnits-100>> ${RemainingCurrentUnitsSub100}`);
                    RemainingCurrentUnitsSub200 = RemainingCurrentUnitsSub100 - 100;
                    console.log(
                        `RemainingCurrentUnitsSub100-100>> ${RemainingCurrentUnitsSub200}`
                    );
                    //Till500 = RemainingCurrentUnitsSub100 - RemainingCurrentUnitsSub200;
                    CostPrice =
                        Math.round((CurrentUnits - RemainingCurrentUnitsSub100) * 0 +
                            (RemainingCurrentUnitsSub100 - RemainingCurrentUnitsSub200) * 2 +
                            RemainingCurrentUnitsSub200 * 3 +
                            servicecharges);
                    console.log(
                        `The Electricity Cost for I-A is ${Math.round(CostPrice)}`
                    );
                } else {
                    let Until100,
                        Until200,
                        Until500,
                        serviceChargeAbove500 = 50;
                    Until100 = CurrentUnits - 100;
                    console.log(`CurrentUnits - 100 === ${Until100}`);
                    Until200 = Until100 - 100;
                    console.log(`Until100-100 === ${Until200}`);
                    Until500 = Until200 - 300;
                    console.log(`Until200-100 === ${Until500}`);
                    CostPrice =
                        Math.round((CurrentUnits - Until100) * 0 +
                            (Until100 - Until200) * 3.5 +
                            (Until200 - Until500) * 4.6 +
                            Until500 * 6.6 +
                            serviceChargeAbove500);
                    console.log(
                        `The Electricity bill for I-A is ${Math.round(CostPrice)}`
                    );
                }
            } else if (tariffTypes == "I-B") {
                let rate = 0,
                    serviceCharge = 0;
                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(`The Electricity Bill for I-B is ${Math.round(CostPrice)}`);
            } else if (tariffTypes == "I-C") {
                let rate = 4.6,
                    serviceCharge = 120;

                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(`The Electricity Bill for I-C is ${Math.round(CostPrice)}`);
            } else if (tariffTypes == "II-A") {
                let rate = 6.35,
                    serviceCharge = 120;

                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for II-A is ${Math.round(CostPrice)}`
                );
            } else if (tariffTypes == "II-B1") {
                let rate = 5.75,
                    serviceCharge = 120;

                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for II-B1 is ${Math.round(CostPrice)}`
                );
            } else if (tariffTypes == "II-B2") {
                let rate = 7.5,
                    serviceCharge = 120;

                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for II-B2 is ${Math.round(CostPrice)}`
                );
            } else if (tariffTypes == "II-C") {
                if (120 >= CurrentUnits) {
                    let rate = 2.85,
                        servicecharges = 120;

                    CostPrice = Math.round(CurrentUnits * rate + servicecharges);
                    console.log(
                        `The Electricity Bill  for II-C is ${Math.round(CostPrice)}`
                    );
                } else {
                    let rate1 = 2.85,
                        servicecharges = 120,
                        rate2 = 5.75,
                        Above120,
                        Below120;
                    Above120 = CurrentUnits - 120;
                    console.log(`Above120 units are  ${Above120}`);
                    Below120 = CurrentUnits - Above120;
                    console.log(`Below120 units are ${Below120}`);
                    CostPrice = Math.round(Below120 * rate1 + Above120 * rate2 + servicecharges);
                    console.log(
                        `The Electricity Bill for II-B1 is ${Math.round(CostPrice)}`
                    );
                }
            } else if (tariffTypes == "III-A1") {
                if (500 >= CurrentUnits) {
                    let rate = 4.0,
                        servicecharges = 40;
                    CostPrice = Math.round(rate * CurrentUnits + servicecharges);
                    console.log(
                        `The Electricity Bill for III-A1 is ${Math.round(CostPrice)}`
                    );
                } else {
                    let rate1 = 4.0,
                        servicecharges = 40,
                        rate2 = 4.6,
                        Above500,
                        Below500;
                    Above500 = CurrentUnits - 500;
                    console.log(`Above120 units are  ${Above500}`);
                    Below500 = CurrentUnits - Above500;
                    console.log(`Below120 units are ${Below500}`);
                    console.log(Below500 * rate1);
                    console.log(Above500 * rate2);
                    CostPrice = Math.round(Below500 * rate1 + Above500 * rate2 + servicecharges);
                    console.log(
                        `The Electricity Bill III-A1 is ${Math.round(CostPrice)}`
                    );
                }
            } else if (tariffTypes == "III-A2") {
                if (500 >= CurrentUnits) {
                    let rate = 0,
                        servicecharges = 0;
                    CostPrice = Math.round(rate * CurrentUnits + servicecharges);
                    console.log(
                        `The Electricity Bill  for III-A2 is ${Math.round(CostPrice)}`
                    );
                } else if (501 <= CurrentUnits && 700 >= CurrentUnits) {
                    let rate1 = 0,
                        serviceCharge = 0,
                        rate2 = 0;
                    Above500 = CurrentUnits - 500;
                    console.log(`Above500 is ${Above500}`);
                    Below500 = CurrentUnits - Above500;
                    console.log(`Below500 is ${Below500}`);
                    CostPrice = Math.round(rate1 * Above500 + rate2 * Below500 + serviceCharge);
                    console.log(
                        `The Electricity Bill  for III-A2 is ${Math.round(CostPrice)}`
                    );
                } else if (701 <= CurrentUnits && 1000 >= CurrentUnits) {
                    let rate1 = 0,
                        serviceCharge = 70,
                        rate2 = 0,
                        rate3 = 2.3,
                        Above700;
                    Above700 = CurrentUnits - 500 - 200;
                    CostPrice =
                        Math.round(rate1 * 500 + rate2 * 200 + Above700 * rate3 + serviceCharge);
                    console.log(
                        `The Electricity Bill   for III-A2 is ${Math.round(CostPrice)}`
                    );
                } else if (1001 <= CurrentUnits && 1500 >= CurrentUnits) {
                    let rate1 = 0,
                        serviceCharge = 70,
                        rate2 = 0,
                        rate3 = 2.3,
                        rate4 = 3.45,
                        Above1000;
                    Above1000 = CurrentUnits - 500 - 200 - 300;
                    CostPrice =
                        Math.round(rate1 * 500 +
                            rate2 * 200 +
                            rate3 * 300 +
                            rate4 * Above1000 +
                            serviceCharge);
                    console.log(
                        `The Electricity Bill  for III-A2 is ${Math.round(CostPrice)}`
                    );
                } else {
                    let rate5 = 4.6,
                        rate1 = 0,
                        serviceCharge = 70,
                        rate2 = 0,
                        rate3 = 2.3,
                        rate4 = 3.45,
                        Above1500;
                    Above1500 = CurrentUnits - 500 - 200 - 300 - 500;
                    CostPrice =
                        Math.round(rate1 * 500 +
                            rate2 * 200 +
                            rate3 * 300 +
                            rate4 * 500 +
                            rate5 * Above1500 +
                            serviceCharge);
                    console.log(
                        `The Electricity Bill  for III-A2 is ${Math.round(CostPrice)}`
                    );
                }
            } else if (tariffTypes == "III-B") {
                let rate = 6.35,
                    serviceCharge = 70;
                console.log(`${CurrentUnits}*${rate}=${CurrentUnits * rate}`);
                CostPrice = Math.round(CurrentUnits * rate + serviceCharge);
                console.log(
                    `The Electricity Bill for III-B is   ${Math.round(CostPrice)}`
                );
            } else if (tariffTypes == "IV") {
                let rate = 0,
                    serviceCharge = 0;

                CostPrice = Math.round(CurrentUnits * rate + serviceCharge);
                console.log(`The Electricity Bill for IV is  ${Math.round(CostPrice)}`);
            } else if (tariffTypes == "V") {
                if (100 >= CurrentUnits) {
                    let rate = 5,
                        serviceCharge = 140;
                    CostPrice = Math.round(CurrentUnits * rate + serviceCharge);
                    console.log(
                        `The Electricity Bill for V is  ${Math.round(
              CostPrice
            )}`
                    );
                } else {
                    let rate1 = 5,
                        serviceCharge = 140,
                        rate2 = 8.05,
                        Above100;

                    Above100 = CurrentUnits - 100;
                    CostPrice =
                        Math.round(Above100 * rate2 + 100 * rate1 + serviceCharge);
                    console.log(
                        `The Electricity Bill for V is  ${Math.round(
              CostPrice
            )}`
                    );
                }
            } else if (tariffTypes == "VI") {
                let rate1 = 12,
                    serviceCharge = 690;
                CostPrice = Math.round(CurrentUnits * rate1 + serviceCharge);
                console.log(
                    `The Electricity Bill for V1 is  ${Math.round(CostPrice)}`
                );
            } else {
                CostPrice = "Not supported in tariff types "
            }
        } else if (SupplyType == "I-High Tension supply") {
            console.log('You can choose "I-A","I-B","II-A","II-B","III","IV","V".');

            if (tariffTypes == "I-A") {
                let rate = 6.35,
                    serviceCharge = 350;
                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for I-A in high Tension Supply is  ${Math.round(
            CostPrice
          )}`
                );
            } else if (tariffTypes == "I-B") {
                let rate = 6.35,
                    serviceCharge = 300;
                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for I-B in high Tension Supply is  ${Math.round(
            CostPrice
          )}`
                );
            } else if (tariffTypes == "II-A") {
                let rate = 6.35,
                    serviceCharge = 350;

                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for II-A in high Tension Supply is  ${Math.round(
            CostPrice
          )}`
                );
            } else if (tariffTypes == "II-B") {
                let rate = 6.35,
                    serviceCharge = 350;
                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for II-B in high Tension Supply is  ${Math.round(
            CostPrice
          )}`
                );
            } else if (tariffTypes == "III") {
                let rate = 8.0,
                    serviceCharge = 350;
                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for II-B in high Tension Supply is  ${Math.round(
            CostPrice
          )}`
                );
            } else if (tariffTypes == "IV") {
                let rate = 6.35,
                    serviceCharge = 0;
                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for IV in high Tension Supply is  ${Math.round(
            CostPrice
          )}`
                );
            } else if (tariffTypes == "V") {
                let rate = 11.0,
                    serviceCharge = 350;
                CostPrice = Math.round(rate * CurrentUnits + serviceCharge);
                console.log(
                    `The Electricity Bill for V in high Tension Supply is  ${Math.round(
            CostPrice
          )}`
                );
            } else {
                CostPrice = "Not supported tariff types";
            }
        }
    } else {
        CostPrice = "Invalid";
        console.log("The Units are  InValid");
        alert("The Units are  InValid");
    }

    localStorage.setItem("PaymentCost", "Rs. " + CostPrice);
}