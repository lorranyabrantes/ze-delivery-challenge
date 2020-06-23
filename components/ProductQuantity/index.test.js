import React from "react";
import { shallow } from "../../test/enzyme.config";
import ProductQuantity from "./index";

describe("Product quantity tests", () => {
    it("Should render correctly",() => {
        const wrapper = shallow(<ProductQuantity /> );

        expect(wrapper.exists()).toBeTruthy();
    });

    it("Should increase the quantity",() => {
        const wrapper = shallow(<ProductQuantity /> );
        const instance = wrapper.instance();

        wrapper.setState({ quantity: 0 });
        wrapper.find("#increase-button").simulate("click");

        expect(instance.state.quantity).toBe(1);
    });


    it("Should decrease the quantity",() => {
        const wrapper = shallow(<ProductQuantity /> );
        const instance = wrapper.instance();

        wrapper.setState({ quantity: 1 });
        wrapper.find("#decrease-button").simulate("click");

        expect(instance.state.quantity).toBe(0);
    });
})