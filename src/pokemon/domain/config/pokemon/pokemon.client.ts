import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class PokemonClient {
    private readonly apiUrl: string;
    constructor() {
        require('dotenv').config();
        this.apiUrl = process.env.POKEMON_API_URL;
    }
    async getPokemonByName(name: string): Promise<AxiosResponse> {
        try {
            const url = `${this.apiUrl}/${name}`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new HttpException(error, 500);
        }
    }
}