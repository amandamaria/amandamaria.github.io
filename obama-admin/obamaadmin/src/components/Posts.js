import React from "react";
import { ReferenceField, 
        TextField, 
        Datagrid, 
        List, 
        TextInput,
        Edit,
        SimpleForm,
        ReferenceInput,
        SelectInput,
        Create,
        EditButton } from "ra-ui-materialui";

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users"><TextField source="id" /></ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);