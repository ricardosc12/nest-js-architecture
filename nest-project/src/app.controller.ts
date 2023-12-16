import { Controller, Get, HttpCode, Param, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	@HttpCode(200)
	//find(@Query() query, @Res() resp: Response): any {
	find(@Query() query): any {
		// return resp.status(200).send({ asd: 'asd' })
		// return this.appService.getHello();
		return query
	}

	// @Get(":id")
	// findOne(@Param('id') id: any): any {
	// 	return `param ${id}`
	// }

	// @Get(":id")
	// findOne(@Param() params: any): any {
	// 	return `param ${params.id}`
	// }


}
