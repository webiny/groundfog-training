import React from "react";
import { validation } from "@webiny/validation";
import { Input } from "@webiny/ui/Input";
import { Cell, Grid } from "@webiny/ui/Grid";
import {
    ButtonContainer,
    classes,
    SimpleButton
} from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import Accordion from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Accordion";
import { BindComponent } from "@webiny/form";

interface calComImagesSettingsProps {
    Bind: BindComponent;
    submit: () => void;
}

const CalComSettings: React.FC<calComImagesSettingsProps> = props => {
    const { Bind, submit } = props;
    return (
        <Accordion title={"Cal.com Calendar Settings"} defaultValue={true}>
            <React.Fragment>
                <Grid className={classes.simpleGrid}>
                    <Cell span={12}>
                        <Bind
                            name={"calendarConfig.calLink"}
                            validators={validation.create("required")}
                        >
                            <Input label={"Calendar Link"} description={"Cal.com calendar link"} />
                        </Bind>
                    </Cell>
                    <Cell span={12}>
                        <Bind
                            name={"calendarConfig.redirectUrl"}
                            validators={validation.create("url")}
                        >
                            <Input
                                label={"Redirect URL"}
                                description={"Redirect URL after booking confirmed"}
                            />
                        </Bind>
                    </Cell>

                    <Cell span={12}>
                        <Bind name={"calendarConfig.brandColor"}>
                            <Input label={"Brand Color"} description={"HEX color (e.g. #000000)"} />
                        </Bind>
                    </Cell>
                </Grid>
                <Cell />
                <Grid className={classes.simpleGrid}>
                    <Cell span={12}>
                        <ButtonContainer>
                            <SimpleButton onClick={submit}>Save</SimpleButton>
                        </ButtonContainer>
                    </Cell>
                </Grid>
            </React.Fragment>
        </Accordion>
    );
};

export default CalComSettings;
