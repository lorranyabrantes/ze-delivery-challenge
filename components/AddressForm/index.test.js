import React from "react";
import { shallow } from "../../test/enzyme.config";
import AddressForm from "./index";

describe("Address form tests", () => {
    it("Should render correctly",() => {
        const wrapper = shallow(<AddressForm /> );

        expect(wrapper.exists()).toBeTruthy();
    })
})