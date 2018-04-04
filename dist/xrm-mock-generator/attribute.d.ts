/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
export default class Attribute {
    private Control;
    createBool(name: string, value: boolean): Xrm.Page.BooleanAttribute;
    createDate(name: string, value: Date, includeTime: boolean): Xrm.Page.DateAttribute;
    createLookup(name: string, lookup: Xrm.Page.LookupValue): Xrm.Page.LookupAttribute;
    createNumber(name: string, value: number, min?: number, max?: number, precision?: number): Xrm.Page.NumberAttribute;
    createOptionSet(attComponents: XrmMock.IOptionSetAttributeComponents, controlComponents?: XrmMock.IAttOptionSetControlComponents[] | XrmMock.IAttOptionSetControlComponents): Xrm.Page.OptionSetAttribute;
    createOptionSet(name: string, value?: string | number, options?: Xrm.Page.OptionSetValue[]): Xrm.Page.OptionSetAttribute;
    createString(attComponents: XrmMock.IStringAttributeComponents, controlComponents?: XrmMock.IAttStringControlComponents[] | XrmMock.IAttStringControlComponents): XrmMock.StringAttributeMock;
    createString(name: string, value?: string, visible?: boolean, disabled?: boolean, format?: Xrm.Page.StringAttributeFormat, maxLength?: number, label?: string): XrmMock.StringAttributeMock;
    private createAttribute(name, value);
    private addAttribute(attribute);
}
