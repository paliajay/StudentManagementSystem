/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProjectService } from "../project.service";
import { ProjectCreateInput } from "./ProjectCreateInput";
import { Project } from "./Project";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";
import { ProjectUpdateInput } from "./ProjectUpdateInput";

export class ProjectControllerBase {
  constructor(protected readonly service: ProjectService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Project })
  async createProject(
    @common.Body() data: ProjectCreateInput
  ): Promise<Project> {
    return await this.service.createProject({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        owner: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Project] })
  @ApiNestedQuery(ProjectFindManyArgs)
  async projects(@common.Req() request: Request): Promise<Project[]> {
    const args = plainToClass(ProjectFindManyArgs, request.query);
    return this.service.projects({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        owner: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async project(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    const result = await this.service.project({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        owner: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProject(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() data: ProjectUpdateInput
  ): Promise<Project | null> {
    try {
      return await this.service.updateProject({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          owner: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProject(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    try {
      return await this.service.deleteProject({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          owner: true,
          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}