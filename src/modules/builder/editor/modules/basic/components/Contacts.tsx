import React, { ChangeEvent, Fragment } from 'react';
import TextField from '@mui/material/TextField';

const Contacts = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  return (
    <Fragment>
      <TextField
        label="Nama"
        variant="filled"
        value={basicTabs.name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'name');
        }}
      />
      <TextField
        label="URL Gambar"
        variant="filled"
        value={basicTabs.image}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'image');
        }}
      />
      <TextField
        label="Gelar"
        variant="filled"
        value={basicTabs.label}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'label');
        }}
      />
      <TextField
        label="Email"
        variant="filled"
        value={basicTabs.email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'email');
        }}
      />
      <TextField
        label="Website"
        variant="filled"
        value={basicTabs.url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'url');
        }}
      />
      <TextField
        label="Telephon"
        variant="filled"
        value={basicTabs.phone}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'phone');
        }}
      />
      <TextField
        label="Alamat Kota / Provinsi"
        variant="filled"
        value={basicTabs.location.city}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const location = basicTabs.location;
          location.city = event.target.value;
          onChangeHandler(location, 'location');
        }}
      />
      <TextField
        label="Pengalaman yang sesuai"
        variant="filled"
        value={basicTabs.relExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'relExp');
        }}
      />
      <TextField
        label="Total Pengalaman"
        variant="filled"
        value={basicTabs.totalExp}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(event.target.value, 'totalExp');
        }}
      />
    </Fragment>
  );
};

export default Contacts;
